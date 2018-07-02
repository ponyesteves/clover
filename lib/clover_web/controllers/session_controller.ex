defmodule CloverWeb.SessionController do
  use CloverWeb, :controller

  alias CloverWeb.Auth

  def new(conn, _) do
    render(conn, "new.html")
  end

  def create(conn, %{"session" => %{"username" => user, "password" => pass}}) do
    case Auth.login_by_username_and_pass(conn, user, pass, repo: Clover.Repo) do
      {:ok, conn} ->
        conn
        |> put_flash(:info, "Bienvenido!")
        |> redirect(to: page_path(conn, :index))

      {:error, _reason, conn} ->
        conn
        |> put_flash(:error, "Invalid Credentials!")
        |> render("new.html")
    end
  end

  def drop(conn, _) do
    conn
    |> Auth.logout()
    |> put_flash(:info, "Hasta la próxima!")
    |> redirect(to: page_path(conn, :index))
  end
end
