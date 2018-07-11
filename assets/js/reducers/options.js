import { OPTIONS } from '../constants'
const init_options = {
  buzo_campera: 'buzo',
  chomba_remera_nada: 'nada',
  colores: 'uno',
  capucha: 'lisa',
  bordados: 'hasta_tres'
}

export const options = (state = init_options, action) => {
  switch (action.type) {
    case OPTIONS.CHANGE_OPTION:
      return changeOption(state, action.key, action.option)
    default:
      return state
  }
}

const changeOption = (state, key, option) => {
  return { ...state, [key]: option }
}
