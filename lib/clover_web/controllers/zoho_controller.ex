defmodule CloverWeb.ZohoController do
  use CloverWeb, :controller

  def index(conn, params) do
    Clover.Zoho.get_token(params["code"])
    redirect conn, to: page_path(conn, :index)
  end

  def oauth(conn, _params) do
    redirect conn, external: Clover.Zoho.request_oauth_url
  end

end
