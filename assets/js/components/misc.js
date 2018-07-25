import React from 'react'
import NumberFormat from 'react-number-format'

export const StepTitle = props => (
  <div className="title">
    <span>{props.children}</span>
  </div>
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

export const Btn = props => (
  <a
    className={"btn btn-success " + props.type}
    onClick={props.handleClick}
  >
    {props.title}
  </a>
)

export const BigOK = () => (
  <div className="thanks_container__big_ok">
    {/* <img src="../images/check.png" /> */}
    <img src="../../images/check_white.png" />
    {/* <img src="../../images/wait2.gif" /> */}

  </div>
)

export const BigWait = () => (
  <div className="thanks_container__big_wait">
    {/* <img src="../images/check.png" /> */}
    {/* <img src="../../images/check_white.png" /> */}
    <img src="../../images/wait2.gif" />

  </div>
)
