import { PEDIDO } from '../constants'
import { getPrecioBase, getPreciosAdicionales } from '../lib/calculadora'
import {init_options} from '../config'

const init_pedido = {
  lead: {},
  options: init_options,
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

const calcularPrecio = newState => {
  console.log(newState.options)
  const precio_base = getPrecioBase(newState.lead.cantidad) + getPreciosAdicionales(newState.options)
  return {
    ...newState,
    precio_unitario: precio_base,
    precio_total: precio_base * newState.lead.cantidad
  }
}
