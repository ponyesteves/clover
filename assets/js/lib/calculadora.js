import { precios_base } from '../config'
import { sum } from '../lib/helpers'
import { all } from '../config'

export const getPrecioBase = cantidad => {
  return precios_base.find(precio => parseInt(cantidad) <= precio.max).precio
}

export const getPreciosAdicionales = options => {
  return Object.keys(options).reduce((p, c) => {
    return sum(p, all[options[c]])
  }, 0)
}
