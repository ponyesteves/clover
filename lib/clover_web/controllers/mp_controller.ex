defmodule CloverWeb.MercadoPagoController do
  use CloverWeb, :controller
  alias Clover.MercadoPago

  def get_link(conn, params) do
    url = MercadoPago.get_payment_link("TITLE", "DESCRIPTION", params["amount"])
    json(conn, %{payment_link: url})
  end
end
