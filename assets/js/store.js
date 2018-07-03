import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from "history"
import thunk from "redux-thunk"

import reducers from "./reducers"
export const myHistory = createBrowserHistory()
const myRouterMiddleware = routerMiddleware(myHistory)

export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, myRouterMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
