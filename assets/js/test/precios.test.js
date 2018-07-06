import { precios_base } from '../config'
import { getPrecioBase } from '../lib/calculadora'

test('precio base', () => {
  expect(getPrecioBase(15)).toBe(precios_base[0].precio)
  expect(getPrecioBase(30)).toBe(precios_base[1].precio)
  expect(getPrecioBase(41)).toBe(precios_base[2].precio)
  expect(getPrecioBase(100)).toBe(precios_base[3].precio)
})
