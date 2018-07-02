import "phoenix_html"

import "bootstrap/dist/css/bootstrap.min.css"
import "../css/phoenix.css"

import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducers from "./reducers"
import { LeadForm } from "./containers/step_one"
import { StepTwoForm } from "./containers/step_two"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Form = props => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LeadForm} />
        <Route path="/step_two" component={StepTwoForm} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Form />, document.getElementById("my-react-app"))

//     <div className="form-check">
// <input type="checkbox" className="form-check-input" id="exampleCheck1" />
// <label className="form-check-label" for="exampleCheck1">
//   Check me out
// </label>
// </div>
