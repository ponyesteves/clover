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

export const SummaryItem = props => (
  <div className="summary_item">
    <div className="summary_item__label">{props.label}:</div>
    <div className="summary_item__value">{props.value}</div>
  </div>
)
