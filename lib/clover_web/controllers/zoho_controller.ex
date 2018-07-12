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
    IO.inspect params
    url = "https://www.zohoapis.com/crm/v2/leads"
    %{"colegio" => colegio, "representante" => representante, "cantidad" => cantidad, "celular" => celular } = params
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

    headers = [{"Authorization", "Bearer " <> Clover.Zoho.get_access_token()}]

    case HTTPoison.post(url, payload, headers) do
      {:ok, %HTTPoison.Response{body: body}} ->
        json(conn, %{msg: body |> Poison.decode!()})

      {:error, msg} ->
        json(conn, %{msg: msg})
    end
  end

  defp create_designation(colegio, representante, cantidad) do
    "Para #{cantidad} Alumnos del Colegio #{colegio} por #{representante}"
  end
end
