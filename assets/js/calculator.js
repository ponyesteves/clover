import React from 'react'
import ReactDOM from 'react-dom'
const row_id = window.row_id

const Calculator = props => (
  <div>
    {row_id || "NAada"}
  </div>
)

ReactDOM.render(<Calculator />, document.getElementById('calculator'))
