export const app_base = '/presup'

export const precios_base = [
  { max: 25, precio: 1750 },
  { max: 40, precio: 1650 },
  { max: 200, precio: 1550 }
]

export const buzo_campera = {
  buzo: 0,
  campera: 50
}

export const remera_chomba_nada = {
  no: 0,
  remera: 420,
  chomba: 600
}

export const capucha = {
  lisa: 0,
  corderito: 150,
  estampado: 150
}

export const colores = {
  uno: 0,
  dos: 100,
  tres: 200
}

export const bordados = {
  hasta_tres: 0,
  hasta_seis: 80
}

export const all = {...buzo_campera, ...remera_chomba_nada, ...capucha, ...colores, ...bordados}

export const init_options = {
  buzo_campera: 'buzo',
  chomba_remera_nada: 'no',
  colores: 'uno',
  capucha: 'lisa',
  bordados: 'hasta_tres'
}
