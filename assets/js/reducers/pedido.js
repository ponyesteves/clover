import { PEDIDO } from '../constants'

const init_pedido = {
  lead: {},
  opciones: {},
  precio_unitario: 1500,
  precio_total: 0
}

export const pedido = (state = init_pedido, action) => {
  switch (action.type) {
    case PEDIDO.CALCULAR_PRECIO:
      return calcularPrecio(state)
    default:
      return state
  }
}

const calcularPrecio = (state) => state
