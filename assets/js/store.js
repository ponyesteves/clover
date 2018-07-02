import { createStore, applyMiddleware } from "redux"
import { routerMiddleware } from 'react-router-redux'

import reducers from "./reducers"

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
