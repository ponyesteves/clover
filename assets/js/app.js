import 'phoenix_html'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/phoenix.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store, myHistory } from './store'
import { Presup } from './containers/presup'
import { LeadForm } from './containers/step_one'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

const Form = props => (
  <Provider store={store}>
    <Router history={myHistory}>
      <Switch>
        <Redirect exact path="/" to="/presup/step_one" />
        <Route exact path="/presup/step_one" component={LeadForm} />
        <Route path="/presup" component={Presup} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Form />, document.getElementById('my-react-app'))

//     <div className="form-check">
// <input type="checkbox" className="form-check-input" id="exampleCheck1" />
// <label className="form-check-label" for="exampleCheck1">
//   Check me out
// </label>
// </div>
