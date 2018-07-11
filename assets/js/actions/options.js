// TO get
// document.querySelector('input[name="buzo_campera"]:checked').value;

import { OPTIONS, PEDIDO } from '../constants'

export const change_option = (key, option, checked) => (dispatch, getState) => {
  if (checked) {
    dispatch({
      type: OPTIONS.CHANGE_OPTION,
      key,
      option
    })
    dispatch({
      type: PEDIDO.CALCULAR_PRECIO,
      changes: { options: getState().options, lead: getState().lead }
    })
  }
}
