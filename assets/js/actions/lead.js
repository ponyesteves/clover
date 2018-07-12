import { LEAD, PEDIDO } from '../constants'

export const createLead = member => dispatch => {
  dispatch({
    type: LEAD.CREATE,
    member
  })
  dispatch({
    type: PEDIDO.CALCULAR_PRECIO,
    changes: { lead: member }
  })

}
export const sumbitLead = () => (dispatch, getState) => {
  postLead(getState().lead)
}


const postLead = member => {
  console.log(member)
  return fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member)
  })
}
