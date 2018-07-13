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
    lead_id = params["lead_id"]
    url = "https://www.zohoapis.com/crm/v2/Leads/#{lead_id}/actions/convert"

    payload =
      %{
        data: [
          %{
            overwrite: true,
            notify_lead_owner: true,
            notify_new_entity_owner: false,
            Deals: %{
              Deal_Name: "Oportunidad potencial",
              Closing_Date: "2019-02-18",
              Amount: 500,
              Stage: "Clasificación"
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
end
