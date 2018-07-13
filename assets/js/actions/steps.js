import { STEP } from '../constants'
import { push } from 'react-router-redux'

export const nextStep = () => (dispatch, getState) => {
  dispatch({
    type: STEP.NEXT
  })

  dispatch(push(getState().step))
}

export const prevStep = () => (dispatch, getState) => {
  dispatch({
    type: STEP.PREV
  })
  dispatch(push(getState().step))
}
