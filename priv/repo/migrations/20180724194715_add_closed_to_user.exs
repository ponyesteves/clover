defmodule Clover.Repo.Migrations.AddClosedToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :closed, :boolean
    end
  end
end
