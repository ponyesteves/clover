import { precios_base } from '../config'
import { sum } from '../lib/helpers'
import { getPrecioBase, getPreciosAdicionales } from '../lib/calculadora'
import {
  buzo_campera,
  remera_chomba_nada,
  capucha,
  colores,
  bordados
} from '../config'

test('precio base', () => {
  expect(getPrecioBase(15)).toBe(precios_base[0].precio)
  expect(getPrecioBase(30)).toBe(precios_base[1].precio)
  expect(getPrecioBase(41)).toBe(precios_base[2].precio)
  expect(getPrecioBase(100)).toBe(precios_base[3].precio)
})

test('precio base with text', () => {
  expect(getPrecioBase('15')).toBe(precios_base[0].precio)
})

test('empty options', () => {
  expect(getPreciosAdicionales({})).toBe(0)
})

test('campera', () => {
  const options = { buzo_campera: 'campera' }
  expect(getPreciosAdicionales(options)).toBe(buzo_campera.campera)
})

test('campera con remera', () => {
  const options = { buzo_campera: 'campera', remera_chomba_nada: 'remera' }

  expect(getPreciosAdicionales(options)).toBe(
    sum(buzo_campera.campera, remera_chomba_nada.remera)
  )
})

test('buzo con remera', () => {
  const options = { remera_chomba_nada: 'remera' }
  expect(getPreciosAdicionales(options)).toBe(remera_chomba_nada.remera)
})

test('buzo con chomba corderito', () => {
  const options = { remera_chomba_nada: 'chomba', capucha: 'corderito' }
  expect(getPreciosAdicionales(options)).toBe(
    sum(remera_chomba_nada.chomba, capucha.corderito)
  )
})

test('campera con chomba lisa dos colores', () => {
  const options = { remera_chomba_nada: 'chomba', capucha: 'corderito', colores: 'dos' }
  expect(getPreciosAdicionales(options)).toBe(
    sum(remera_chomba_nada.chomba, capucha.corderito, colores.dos)
  )
})

test('campera con chomba lisa tres colores y hasta seis bordados', () => {
  const options = {
    remera_chomba_nada: 'chomba',
    capucha: 'corderito',
    colores: 'tres',
    bordados: 'hasta_seis'
  }
  expect(getPreciosAdicionales(options)).toBe(
    sum(remera_chomba_nada.chomba, capucha.corderito, colores.tres, bordados.hasta_seis)
  )
})
