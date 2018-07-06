import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from "history"
import thunk from "redux-thunk"

import reducers from "./reducers"
export const myHistory = createBrowserHistory()
const myRouterMiddleware = routerMiddleware(myHistory)

const args = [applyMiddleware(thunk, myRouterMiddleware)]
const getArgs = () => {
  if(window.__REDUX_DEVTOOLS_EXTENSION__)
   return [...args, window.__REDUX_DEVTOOLS_EXTENSION__() ]
  return args
}

export const store = createStore(
  reducers,
  compose.apply(this, getArgs())
)
