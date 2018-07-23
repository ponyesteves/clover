defmodule CloverWeb.Redirect do
  import Plug.Conn

  def init([to: _] = opts), do: opts
  def init(_default), do: raise("Missing required to: option in redirect")

  def call(conn, opts) do
    conn
    |> Phoenix.Controller.redirect(opts)
  end
end
