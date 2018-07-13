require IEx

defmodule CloverWeb.ZohoController do
  use CloverWeb, :controller

  def index(conn, params) do
    Clover.Zoho.get_token(params["code"])
    redirect(conn, to: page_path(conn, :index))
  end

  def oauth(conn, _params) do
    redirect(conn, external: Clover.Zoho.request_oauth_url())
  end

  def create_lead(conn, params) do
    url = "https://www.zohoapis.com/crm/v2/leads"

    %{
      "colegio" => colegio,
      "representante" => representante,
      "cantidad" => cantidad,
      "celular" => celular
    } = params

    payload =
      %{
        data: [
          %{
            Last_Name: colegio,
            Company: colegio,
            First_Name: representante,
            Designation: create_designation(colegio, representante, cantidad),
            Mobile: celular,
            No_of_Employees: cantidad
          }
        ],
        wf_trigger: true
      }
      |> Poison.encode!()

    case HTTPoison.post(url, payload, get_headers) do
      {:ok, %HTTPoison.Response{body: body, status_code: 201}} ->
        json(conn, %{msg: body |> Poison.decode!()})

      {:ok, %HTTPoison.Response{status_code: 401}} ->
        Clover.Zoho.renew_access_token()
        create_lead(conn, params)

      {:error, msg} ->
        json(conn, %{msg: msg})
    end
  end

  def convert_lead(conn, params) do
    %{
      "lead" => %{"id" => lead_id},
      "pedido" => %{"precio_total" => precio_total, "precio_unitario" => precio_unitario, "options" => options, "fase" => fase}
    } = params

    options = Map.put(options, "precio_unitario", "#{precio_unitario}")

    url = "https://www.zohoapis.com/crm/v2/Leads/#{lead_id}/actions/convert"

    payload =
      %{
        data: [
          %{
            overwrite: true,
            notify_lead_owner: false,
            notify_new_entity_owner: fase == "Negociación",
            Deals: %{
              Deal_Name: "Oportunidad potencial",
              Closing_Date: Date.utc_today() |> Date.add(25) |> Date.to_string(),
              Amount: precio_total,
              Stage: fase,
              Description: build_deal_desc(options)
            }
          }
        ]
      }
      |> Poison.encode!()

    case HTTPoison.post(url, payload, get_headers) do
      {:ok, %HTTPoison.Response{body: body, status_code: 200}} ->
        json(conn, %{msg: body |> Poison.decode!()})

      {:ok, %HTTPoison.Response{status_code: 401}} ->
        Clover.Zoho.renew_access_token()
        create_lead(conn, params)

      {:error, msg} ->
        json(conn, %{msg: msg})
    end
  end

  defp create_designation(colegio, representante, cantidad) do
    "Para #{cantidad} Alumnos del Colegio #{colegio} por #{representante}"
  end

  def get_headers do
    [{"Authorization", "Bearer " <> Clover.Zoho.get_access_token()}]
  end

  def build_deal_desc(options) do
    Enum.map(options, fn {k, v} -> k <> ": " <> v end)
    |> Enum.join("\n")
  end
end
