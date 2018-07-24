defmodule Clover.Repo.Migrations.UsernameUnique do
  use Ecto.Migration

  def change do
    create unique_index(:users, [:username])
  end
end
