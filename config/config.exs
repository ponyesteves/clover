# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config


# General application configuration
config :clover,
  ecto_repos: [Clover.Repo]

# Configures Guardian
config :clover, Clover.Guardian,
  issuer: "clover",
  secret_key: "mzRoWUUAbgH4XOmfb9zoXh/3ErxUBlXDhP/1UH3DdvaMCqlp+em9VMFubctjMGOa"

# Configures GuardianPipeLine

config :clover, CloverWeb.Guardian.AuthAccessPipeline,
  module: Clover.Guardian,
  error_handler: CloverWeb.Guardian.AuthErrorHandler

# Configures the endpoint
config :clover, CloverWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "4ntVSROhkwXahcj9VuTqRRm804z4eQcSd8Js0mF+6Tshn2MLEAPuzcDOdsl8Xg6p",
  render_errors: [view: CloverWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Clover.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :clover, CloverWeb.Gettext, default_locale: "es"

  # Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
