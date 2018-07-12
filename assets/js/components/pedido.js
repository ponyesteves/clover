import React from 'react'
import { connect } from 'react-redux'

import { PedidoItem } from '../components/misc'

const prePedido = props => (
  <div
    className="pedido_row"
    style={{ display: (props.step == 'one' && 'none') || 'flex' }}
  >
    <PedidoItem label="Alumnos" value={props.cantidad} />
    <PedidoItem label="Precio" value={props.precio_unitario} prefix="$ " />
    <PedidoItem label="Total" value={props.precio_total} prefix="$ " />
  </div>
)

const mapStateToProps = state => ({
  step: state.step,
  cantidad: state.lead.cantidad,
  precio_unitario: state.pedido.precio_unitario,
  precio_total: state.pedido.precio_total
})

export const Pedido = connect(mapStateToProps)(prePedido)
