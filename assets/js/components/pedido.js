import React from 'react'
import { connect } from 'react-redux'

const prePedido = (props) => (
  <div className="container">
  <div className="pedido_row">
    <div>Cantidad: {props.cantidad}</div>
    <div>Precio Unitario: {props.precio_unitario}</div>
    <div>Total: {props.precio_total}</div>
    </div>
    </div>
)

const mapStateToProps = state => ({
  cantidad: state.lead.cantidad,
  precio_unitario: state.pedido.precio_unitario,
  precio_total: state.pedido.precio_total

})
export const Pedido = connect(mapStateToProps)(prePedido)
