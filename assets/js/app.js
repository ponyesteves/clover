import 'phoenix_html'
import '../css/phoenix.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store, myHistory } from './store'
import { Steps } from './containers/steps'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

const Form = props => (
  <Provider store={store}>
    <Router history={myHistory}>
      <Switch>
        <Redirect exact path="/" to="/steps/one" />
        <Route path="/steps" component={Steps} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Form />, document.getElementById('my-react-app'))
