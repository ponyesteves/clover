defmodule Clover.Repo.Migrations.CreateStudents do
  use Ecto.Migration

  def change do
    create table(:students) do
      add :alias, :string
      add :talle, :string
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:students, [:user_id])
  end
end
