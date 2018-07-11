import { precios_base } from '../config'

export const getPrecioBase = cantidad => {
  return precios_base.find(precio => parseInt(cantidad) <= precio.max).precio
}

export const getPreciosAdicionales = options => {
  if(!options)
    return 1

}
