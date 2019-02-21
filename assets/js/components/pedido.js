import React from 'react'
import { connect } from 'react-redux'

import { PedidoItem } from '../components/misc'

const prePedido = props => (
  <div
    className="pedido_row"
    style={{ display: (['one', 'thanks'].includes(props.step) && 'none') || 'flex' }}
  >
    <PedidoItem label="Total por alumno" value={props.precio_unitario} prefix="$ " />
  </div>
)

const mapStateToProps = state => ({
  step: state.step,
  cantidad: state.lead.cantidad,
  precio_unitario: state.pedido.precio_unitario,
  precio_total: state.pedido.precio_total
})

export const Pedido = connect(mapStateToProps)(prePedido)
