defmodule Clover.Zoho do
  @api_domain "https://accounts.zoho.com"
  @api_base @api_domain <> "/oauth/v2/token"
  @client_id "1000.0AVU17UIGG0G88251PNB9PJOLNE6IZ"
  @client_secret "f13e053307da3709a09df60638ef0d37b82b10341f"
  @redirect_uri "http://localhost:4000/oauth2callback"

  def start_link do
    Agent.start_link(fn -> nil end, name: :zoho)
  end

  def get_token(grant_token) do
    payload =
      {:form,
       [
         code: grant_token,
         client_id: @client_id,
         client_secret: @client_secret,
         redirect_uri: @redirect_uri,
         grant_type: "authorization_code"
       ]}

    case HTTPoison.post(
           @api_base,
           payload
         ) do
      {:ok, %HTTPoison.Response{body: body}} ->
        Poison.decode!(body)
        |> save_session

      {:error, _} ->
        IO.inspect("ERROR")
    end
  end

  def refresh_token do
    payload =
      {:form,
       [
         client_id: @client_id,
         client_secret: @client_secret,
         refresh_token: get_refresh_token(),
         grant_type: "refresh_token"
       ]}

    {:ok, %HTTPoison.Response{body: body}} = HTTPoison.post(@api_base, payload)

    Poison.decode!(body)
    |> save_session
  end

  def get_access_token do
    Agent.get(:zoho, fn state -> state end) || renew_access_token()
  end

  def renew_access_token do
    refresh_token() && get_access_token()
  end

  def get_refresh_token do
    File.read!("rt")
  end

  defp save_session(session_map) do
    session_map["refresh_token"] && File.write!("rt", session_map["refresh_token"])
    Agent.update(:zoho, fn _ -> session_map["access_token"] end)
  end

  def request_oauth_url do
    "https://accounts.zoho.com/oauth/v2/auth?&scope=ZohoCRM.modules.ALL&client_id=#{@client_id}&response_type=code&access_type=offline&redirect_uri=#{
      @redirect_uri
    }&prompt=consent"
  end
end
