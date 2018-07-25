import { PEDIDO } from '../constants'
import { getPrecioBase, getPreciosAdicionales } from '../lib/calculadora'
import {init_options} from '../config'

const init_pedido = {
  lead: {},
  options: init_options,
  precio_unitario: 0,
  precio_total: 0,
  fase: ""
}

export const pedido = (state = init_pedido, action) => {
  switch (action.type) {
    case PEDIDO.CALCULAR_PRECIO:
      return calcularPrecio({ ...state, ...action.changes })
    case PEDIDO.SET_FASE:
      return { ...state, fase: action.fase }
    default:
      return state
  }
}

const calcularPrecio = newState => {
  const precio_base = getPrecioBase(newState.lead.cantidad) + getPreciosAdicionales(newState.options)
  return {
    ...newState,
    precio_unitario: precio_base,
    precio_total: precio_base * newState.lead.cantidad
  }
}
