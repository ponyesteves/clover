defmodule Clover.Zoho do
  @client_id "1000.0AVU17UIGG0G88251PNB9PJOLNE6IZ"
  @client_secret "f13e053307da3709a09df60638ef0d37b82b10341f"
  @redirect_uri "http://localhost:4000/oauth2callback"

  def get_token(grant_token) do
    case HTTPoison.post(build_url(grant_token), Poison.encode!(%{})) do
      {:ok, %HTTPoison.Response{body: body}} ->
        Poison.decode!(body)
        |> save_session

      {:error, _} ->
        IO.inspect("ERROR")
    end
  end

  defp build_url(grant_token) do
    "https://accounts.zoho.com/oauth/v2/token?code=#{grant_token}&redirect_uri=#{@redirect_uri}&client_id=#{
      @client_id
    }&client_secret=#{@client_secret}&grant_type=authorization_code"
  end

  defp save_session(session_map) do
    case Agent.start_link(fn -> session_map end, name: :zoho) do
      {:error, _} ->
        Agent.update(:zoho, fn _ -> session_map end)
      {:ok, _} -> {:ok}
    end
  end

  def get_session do
    Agent.get(:zoho, fn state -> state end)
  end
end


# https://accounts.zoho.com/oauth/v2/auth?&scope=ZohoCRM.modules.leads.ALL&client_id=1000.0AVU17UIGG0G88251PNB9PJOLNE6IZ&response_type=code&access_type=offline&redirect_uri=http://localhost:4000/oauth2callback&prompt=consent

#TODO: save refresh token in disk
