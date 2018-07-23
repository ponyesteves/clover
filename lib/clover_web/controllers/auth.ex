defmodule CloverWeb.Auth do
  import Plug.Conn
  import Phoenix.Controller
  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]
  import CloverWeb.Gettext, only: [dgettext: 2]


  alias CloverWeb.Router.Helpers

  def login(conn, user) do
    conn
    |> Clover.Guardian.Plug.sign_in(user)
  end

  def logout(conn) do
    conn
    |> Clover.Guardian.Plug.sign_out()
  end

  def login_by_username_and_pass(conn, username, given_pass, opts) do
    repo = Keyword.fetch!(opts, :repo)
    user = repo.get_by(Clover.Accounts.User, username: username)

    cond do
      user && checkpw(given_pass, user.password_hash) ->
        {:ok, login(conn, user)}
      user ->
        {:error, :unauthorized, conn}
      true  ->
        dummy_checkpw()
        {:error, :not_found, conn}
    end
  end

  def check_admin(conn, _opts) do
    current_user = conn.assigns[:current_user]
    unless(current_user && current_user.admin) do
      conn
      |> put_flash(:error,  dgettext("errors", "only admin"))
      |> redirect(to: "/")
    else
      conn
    end
  end
end
