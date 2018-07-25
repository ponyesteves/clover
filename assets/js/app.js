import 'phoenix_html'
import '../css/phoenix.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store, myHistory } from './store'
import { Steps } from './containers/steps'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

if(/steps\/(?!one)/.test(window.location.pathname)){
  window.location.href = "/"
}

const Form = props => (
  <Provider store={store}>
    <Router history={myHistory}>
      <Switch>
        <Redirect exact path="/app" to="/app/steps/one" />
        <Route path="/app/steps" component={Steps} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Form />, document.getElementById('my-react-app'))
