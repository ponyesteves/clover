defmodule Clover.Accounts.Student do
  use Ecto.Schema
  import Ecto.Changeset
  alias Clover.Accounts.User

  schema "students" do
    field :alias, :string
    field :talle, :string
    
    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(student, attrs) do
    student
    |> cast(attrs, [:alias, :talle])
    # |> validate_required([:alias, :talle])
  end
end
