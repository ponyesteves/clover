import { OPTIONS } from '../constants'
import { init_options } from '../config'

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
