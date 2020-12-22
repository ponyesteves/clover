FROM elixir:1.10-alpine AS app

# install build dependencies
RUN apk add --no-cache build-base npm git python

# prepare build dir
WORKDIR /app

# install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

ENV MIX_ENV=prod
ENV PORT=4000
ENV SECRET_KEY_BASE=pAWnTZblYh9CM6T6+GYJdKeCFjgo4PP8NWXUjzOmmi+gIm3sfD0Uo52LmxlUbRYx

# install mix dependencies
COPY mix.exs mix.lock ./
COPY config config
RUN mix do deps.get, deps.compile

# build assets
COPY assets/package.json assets/package-lock.json ./assets/
RUN npm --prefix ./assets ci --progress=false --no-audit --loglevel=error

COPY priv priv
COPY assets assets
RUN npm run --prefix ./assets build
RUN mix phx.digest

COPY lib lib

CMD ["mix", "phx.server"]

