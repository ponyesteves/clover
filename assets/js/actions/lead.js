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

const postLead = member => {
  return fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member)
  })
}

export const convertLead = (lead_id) => {
  return fetch('/api/convert_lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({lead_id})
  })
}
