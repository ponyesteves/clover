import React from 'react'
import NumberFormat from 'react-number-format'

export const StepTitle = props => (
  <span className="title">{props.children}</span>
)

export const PedidoItem = props => (
  <div className="pedido_item">
    <div>{props.label}</div>
    <br />
    <div>
      <NumberFormat
        value={props.value}
        displayType={'text'}
        thousandSeparator={true}
        prefix={props.prefix}
      />
    </div>
  </div>
)
