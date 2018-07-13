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
  const lead = getState().lead

  dispatch({
    type: PEDIDO.CALCULAR_PRECIO,
    changes: { lead }
  })
  // return true

  postLead(lead)
    .then(resp => resp.json())
    .then(body => {
      const id = body.msg.data[0].details.id
      dispatch({
        type: LEAD.CREATE,
        member: { ...lead, id }
      })
    })
}

export const convertLead = (fase) => (dispatch, getState) => {
  const lead = getState().lead,
    pedido = getState().pedido
  fetch('/api/convert_lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lead, pedido: {...pedido, fase} })
  })
  dispatch(push(getState().step))
}

const postLead = member => {
  return fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member)
  })
}
