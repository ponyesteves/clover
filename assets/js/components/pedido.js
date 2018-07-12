import React from 'react'
import { connect } from 'react-redux'

const prePedido = props => (
  <div
    className="pedido_row"
    style={{ display: (props.step == 'one' && 'none') || 'block' }}
  >
    <div>Cantidad: {props.cantidad}</div>
    <div>Precio Unitario: {props.precio_unitario}</div>
    <div>Total: {props.precio_total}</div>
  </div>
)

const mapStateToProps = state => ({
  step: state.step,
  cantidad: state.lead.cantidad,
  precio_unitario: state.pedido.precio_unitario,
  precio_total: state.pedido.precio_total
})

export const Pedido = connect(mapStateToProps)(prePedido)
