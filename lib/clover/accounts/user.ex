defmodule Clover.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Clover.Accounts.Student

  schema "users" do
    field :username, :string
    field :password, :string, virtual: true
    field :students_quantity, :integer, virtual: true, default: 0
    field :password_hash, :string
    field :admin, :boolean, default: false
    has_many :students, Student

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password, :admin, :students_quantity])
    |> validate_required([:username, :password, :admin])
    |> put_pass_hash
    |> create_students_placeholder
  end
  
  defp create_students_placeholder(changeset) do
    case get_field(changeset,:students_quantity) do
      0 -> changeset
      qty ->  change(changeset, %{students: 1..qty |> Enum.map(fn _ -> %Student{} end)}) 
    end
   
  end

  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Bcrypt.add_hash(password))
  end

  defp put_pass_hash(changeset), do: changeset
end
