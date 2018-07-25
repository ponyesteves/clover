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

  pipeline :presup do
    plug(:put_layout, {CloverWeb.LayoutView, "presup.html"})
  end


  scope "/", CloverWeb do
    pipe_through([:browser, :auth])
    get("/profile", UserController, :profile)
    put("/profile", UserController, :update_profile)
  end

  scope "/bo", CloverWeb do
    pipe_through([:browser, :auth, :backoffice])
    resources("/users", UserController)
  end

  # Public
  scope "/", CloverWeb do
    # Use the default browser stack
    pipe_through([:browser])
    get("/", Redirect, to: "/app")
    get("/login", SessionController, :new)
    get("/logout", SessionController, :drop)
    resources("/sessions", SessionController, only: [:create])
    get("/auth", ZohoController, :oauth)
    get("/oauth2callback", ZohoController, :index)

  end

  scope "/app", CloverWeb do
    # Use the default browser stack
    pipe_through([:browser, :presup])
    get("/", PageController, :index)
    # If refresh_token is no longer valid got to /auth to get a new one
   end

  scope "/app/steps", CloverWeb do
    # Use the default browser stack
    pipe_through([:browser, :presup])
    get("/*path", PageController, :index)
  end


  # Other scopes may use custom stacks.
  scope "/api", CloverWeb do
    pipe_through(:api)
    post("/lead", ZohoController, :create_lead)
    post("/convert_lead", ZohoController, :convert_lead)
    post("/payment_link", MercadoPagoController, :get_link)
  end
end
