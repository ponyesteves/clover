import { createStore, applyMiddleware } from "redux"
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from "history"
import thunk from "redux-thunk"

import reducers from "./reducers"
const myRouterMiddleware = routerMiddleware(createBrowserHistory())

export const store = createStore(
  reducers,
  applyMiddleware(thunk, routerMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
