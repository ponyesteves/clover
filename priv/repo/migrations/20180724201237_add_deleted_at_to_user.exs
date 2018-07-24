defmodule Clover.Repo.Migrations.AddDeletedAtToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :deleted_at, :date
    end
  end
end
