defmodule Clover.MercadoPago do
  @api_domain "https://api.mercadopago.com/"
  @ep_token @api_domain <> "oauth/token"
  @client_id "422239403185426"
  @client_secret "BoGuMj8rYWKc8GI9kKO4c60accMn1aSF"
  @grant_type_access "client_credentials"

  def start_link do
    Agent.start_link(fn -> nil end, name: :mp)
  end

  def renew_token() do
    payload =
      {:form,
       [
         client_id: @client_id,
         client_secret: @client_secret,
         grant_type: @grant_type_access
       ]}

    case HTTPoison.post(
           @ep_token,
           payload
         ) do
      {:ok, %HTTPoison.Response{body: body}} ->
        Poison.decode!(body)
        |> save_session

      {:error, _} ->
        IO.inspect("ERROR")
    end
  end

  def get_token do
    Agent.get(:mp, fn state -> state end)
  end

  def get_payment_link(title, description, amount) do
    payload = %{
      items: [
        %{
          title: "Dummy Item",
          description: "Multicolor Item",
          quantity: 1,
          currency_id: "ARS",
          unit_price: amount
        }
      ]
    }

    case HTTPoison.post(
           ep_preferences(get_token),
           payload |> Poison.encode!(),
           [{"Content-Type", "application/json"}]
         ) do
      {:ok, %HTTPoison.Response{status_code: sc}} when sc >= 400 ->
        renew_token
        get_payment_link(title, description, amount)

      {:ok, %HTTPoison.Response{body: body}} ->
        Poison.decode!(body)
        |> Map.get("init_point")
        |> IO.inspect()

      {:error, _} ->
        IO.inspect("ERROR")
    end
  end

  defp save_session(session_map) do
    # session_map["refresh_token"] && File.write!("rt", session_map["refresh_token"])
    Agent.update(:mp, fn _ -> session_map["access_token"] end)
  end

  defp ep_preferences(token) do
    "https://api.mercadopago.com/checkout/preferences?access_token=#{token}"
  end
end
