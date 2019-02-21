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
  <a className={'btn btn-success ' + props.type} onClick={props.handleClick}>
    {props.title}
    {props.children}
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

export const TalleTable = () => (
  <table className="talle_table">
    <thead>
      <tr>
        <th />
        <th>Ancho Sisa</th>
        <th>Largo</th>
      </tr>
    </thead>
    <tbody>
      {[
        ['T1', 46, 52],
        ['T2', 49, 57],
        ['T3', 52, 60],
        ['T4', 55, 64],
        ['T5', 57, 66],
        ['T6', 60, 70],
        ['T7', 65, 71]
      ].map((medida, idx) => (
        <tr key={idx}>
          <td>{medida[0]}</td>
          <td>{medida[1]}</td>
          <td>{medida[2]}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export const Medida = (props) => (
  <div className="form-group">
    <label>{props.title}</label>
    <input
      type="number"
      val={props.medida}
      onChange={props.handleChange}
      className="form-control"
      aria-describedby="largoHelp"
      placeholder="centimetros"
    />
    <small id="largoHelp" className="form-text text-muted">
      <p>{props.helpText}</p>
    </small>
  </div>
)
