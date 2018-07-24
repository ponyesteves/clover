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
    field :closed, :boolean, default: false
    field :deleted_at, :date, default: nil

    has_many :students, Student, on_replace: :delete

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password, :admin, :students_quantity, :closed, :deleted_at])
    |> cast_assoc(:students)
    |> my_custom_validation
    |> put_pass_hash
    |> create_students_placeholder
    |> unique_constraint(:username)
  end

  defp my_custom_validation(changeset) do
    case get_field(changeset, :action) do
      :insert -> validate_required(changeset, [:password, :admin])
      _ -> changeset
    end

  end

  defp create_students_placeholder(changeset) do
    case get_field(changeset,:students_quantity) do
      0 -> change(changeset, %{students_quantity: get_field(changeset, :students) |> length })
      qty ->
        case get_field(changeset, :action) do
          :insert -> change(changeset, %{students: 1..qty |> Enum.map(fn _ -> %Student{} end)})
          _ ->
            students = get_field(changeset, :students)
            diff = qty - length(students)
            IO.inspect "this is  -------    #{diff}"
            new_students = if(diff > 0) do
              students ++ (1..diff |> Enum.map(fn _ -> %Student{} end))
            else
              students |> Enum.slice(0..(diff-1))
            end
            change(changeset, %{students: new_students})
        end

    end

  end

  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Bcrypt.add_hash(password))
  end

  defp put_pass_hash(changeset), do: changeset
end
