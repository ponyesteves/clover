defmodule CloverWeb.ZohoController do
  use CloverWeb, :controller

  def index(conn, params) do
    Clover.Zoho.get_token(params["code"])
    redirect(conn, to: page_path(conn, :index))
  end

  def oauth(conn, _params) do
    redirect(conn, external: Clover.Zoho.request_oauth_url())
  end

  def create_lead(conn, _params) do
    payload =
      %{
        data: [
          %{
            Last_Name: "Prueba API",
            Company: "Herny Company"
          }
        ],
        wf_trigger: true
      }
      |> Poison.encode!()

    url = "https://www.zohoapis.com/crm/v2/leads"

    headers = [{"Authorization", "Bearer " <> Clover.Zoho.get_access_token()}]

    case HTTPoison.post(url, payload, headers) do
      {:ok, %HTTPoison.Response{body: body}} ->
        json(conn, %{msg: body |> Poison.decode!()})

      {:error, msg} ->
        json(conn, %{msg: msg})
    end
  end
end
