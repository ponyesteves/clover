import { STEP } from '../constants'
import { push } from 'react-router-redux'
import { convertLead } from './lead'
export const nextStep = () => (dispatch, getState) => {
  dispatch({
    type: STEP.NEXT
  })
  const step = getState().step
  dispatch(push(step))
  const lead = getState().lead,
    pedido = getState().pedido


  if (step == 'five') {
    convertLead(lead, pedido).then(resp => resp.json()).then(console.log)
  }
}

export const prevStep = () => (dispatch, getState) => {
  dispatch({
    type: STEP.PREV
  })
  dispatch(push(getState().step))
}
