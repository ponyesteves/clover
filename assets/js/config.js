export const app_base = '/presup'

export const precios_base = [
  { max: 25, precio: 1800 },
  { max: 40, precio: 1700 },
  { max: 60, precio: 1600 },
  { max: 200, precio: 1500 }
]

export const buzo_campera = {
  buzo: 0,
  campera: 150
}

export const remera_chomba_nada = {
  no: 0,
  remera: 400,
  chomba: 600
}

export const capucha = {
  lisa: 0,
  corderito: 150,
  estampado: 150
}

export const colores = {
  uno: 0,
  dos: 150,
  tres: 150
}

export const bordados = {
  hasta_tres: 0,
  hasta_seis: 150
}

export const all = {...buzo_campera, ...remera_chomba_nada, ...capucha, ...colores, ...bordados}

export const init_options = {
  buzo_campera: 'buzo',
  chomba_remera_nada: 'no',
  colores: 'uno',
  capucha: 'lisa',
  bordados: 'hasta_tres'
}
