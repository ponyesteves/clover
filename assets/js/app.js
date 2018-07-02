import "phoenix_html"

import React from 'react'
import ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/phoenix.css'

const HelloReact = (props) => (
  <div>HELLO REACT!</div>
)

ReactDOM.render(<HelloReact />, document.getElementById("my-react-app"))
