defmodule Mix.Tasks.Tr do
  use Mix.Task

  @shortdoc "Simply runs the Hello.say/0 command."
  def run(_) do
    # calling our Hello.say() function from earlier
    Mix.Task.run("gettext.extract")
    Mix.Task.run("gettext.merge", ["priv/gettext","--locale", "es"])
  end
end
