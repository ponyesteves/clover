defmodule Clover.UsersTest do
  use Clover.DataCase
  alias Clover.Repo
  alias Clover.Accounts
  alias Clover.Accounts.{User, Student}

  describe "users" do
    test "creates students placeholders" do
      qty = 10
      Accounts.create_user(%{"username" => "test", "password" => "1234", "students_quantity" => qty })
      assert Repo.all(Student) |> length == qty
      user = Accounts.find_user("test") |> List.first
      assert (user.students |> Enum.count) == qty
    end
    test "creates user without students" do
      qty = 0
      Accounts.create_user(%{"username" => "test", "password" => "1234"})
      assert Repo.all(Student) |> length == qty
      user = Accounts.find_user("test") |> List.first
      assert (user.students |> Enum.count) == qty
    end

  end
end
