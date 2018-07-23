defmodule Clover.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :username, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :admin, :boolean

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password, :admin])
    |> validate_required([:username, :password, :admin])
    |> put_pass_hash
  end

  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Bcrypt.add_hash(password))
  end

  defp put_pass_hash(changeset), do: changeset
end
