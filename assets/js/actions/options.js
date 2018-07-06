// TO get
// document.querySelector('input[name="buzo_campera"]:checked').value;

import { OPTIONS } from '../constants'

export const change_option = (key, option, checked) => dispatch => {
  if (checked) {
    dispatch({
      type: OPTIONS.CHANGE_OPTION,
      key,
      option
    })
  }
}
