import React from 'react'
import { connect } from 'react-redux'

const prePedido = (props) => (
  <div>
    <div className="col-md-3">Cantidad: {props.cantidad}</div>
    <div className="col-md-3">Precio Unitario: {props.precio_unitario}</div>
    <div className="col-md-3">Total: {props.precio_total}</div>
    <div className="col-md-3" />
  </div>
)

const mapStateToProps = state => ({
  cantidad: state.lead.cantidad,
  precio_unitario: state.pedido.precio_unitario,
  precio_total: state.pedido.precio_total

})
export const Pedido = connect(mapStateToProps)(prePedido)
