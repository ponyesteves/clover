import { STEP } from '../constants'
import { push } from 'react-router-redux'

export const nextStep = () => (dispatch, state) => {

  dispatch({
    type: STEP.NEXT
  })
  alert(state().step)
  dispatch(push(state().step))
}
