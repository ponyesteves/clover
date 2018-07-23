defmodule CloverWeb.Router do
  use CloverWeb, :router
  import CloverWeb.Auth, only: [check_admin: 2]
  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  pipeline :backoffice do
    plug(:check_admin)
  end

  pipeline :auth do
    plug(CloverWeb.Guardian.AuthAccessPipeline)
  end

  pipeline :main do
    plug(:put_layout, {CloverWeb.LayoutView, "main.html"})
  end


  scope "/dashboard" do
    pipe_through([:browser, :auth, :main])
  end

  scope "/bo" do
    pipe_through([:browser, :auth, :main, :backoffice])
    resources("/users", UserController, only: [:index, :show, :delete])
  end

  # Public
  scope "/", CloverWeb do
    # Use the default browser stack
    pipe_through([:browser, :main])
    get("/", PageController, :index)
    resources("/sessions", SessionController, only: [:new, :create])
    delete("/sessions/drop", SessionController, :drop)
  end
  scope "/app", CloverWeb do
    # Use the default browser stack
    pipe_through(:browser)
    get("/", PageController, :index)
    resources("/users", UserController, only: [:new, :create, :edit, :update])
    resources("/sessions", SessionController, only: [:new, :create])
    delete("/sessions/drop", SessionController, :drop)
    # If refresh_token is no longer valid got to /auth to get a new one
    get("/auth", ZohoController, :oauth)
    get("/oauth2callback", ZohoController, :index)
  end

  scope "/app/steps", CloverWeb do
    # Use the default browser stack
    pipe_through(:browser)
    get("/*path", PageController, :index)
  end


  # Other scopes may use custom stacks.
  scope "/api", CloverWeb do
    pipe_through(:api)
    post("lead", ZohoController, :create_lead)
    post("convert_lead", ZohoController, :convert_lead)
    post("payment_link", MercadoPagoController, :get_link)
  end
end
