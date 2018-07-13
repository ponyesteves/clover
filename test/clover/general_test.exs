defmodule Clover.GeneralTest do
  use Clover.DataCase

  alias CloverWeb.ZohoController

  describe "general" do
    test "list_users/0 returns all users" do
      options = %{"a" => "a" , "b" => "b", "c" => "c"}

      assert ZohoController.build_deal_desc(options) == "a: a\nb: b\nc: c"
    end
  end
end
