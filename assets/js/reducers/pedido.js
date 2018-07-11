import { PEDIDO } from '../constants'
import { getPrecioBase } from '../lib/calculadora'
const init_pedido = {
  lead: {},
  options: {},
  precio_unitario: 0,
  precio_total: 0
}

export const pedido = (state = init_pedido, action) => {
  switch (action.type) {
    case PEDIDO.CALCULAR_PRECIO:
      return calcularPrecio({ ...state, ...action.changes })
    default:
      return state
  }
}

const calcularPrecio = state => {
  const precio_base = getPrecioBase(state.lead.cantidad) + getPreciosAdicionales(state.options)
  return {
    ...state,
    precio_unitario: precio_base,
    precio_total: precio_base * state.lead.cantidad
  }
}
