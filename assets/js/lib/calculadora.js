import { precios_base } from '../config'

export const getPrecioBase = cantidad => {
  return precios_base.find(precio => cantidad <= precio.max).precio
}
