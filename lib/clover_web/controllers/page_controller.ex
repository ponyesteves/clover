defmodule CloverWeb.PageController do
  use CloverWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
