import { LEAD, PEDIDO, STEP } from '../constants'
import { push } from 'react-router-redux'
import { go_and_pay } from './mercado_pago'
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
  if (mix_environment == 'dev') {
    return dispatch({
      type: LEAD.CREATE,
      member: { ...lead, id: 'fake_id' }
    })
  }

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

export const convertLead = fase => (dispatch, getState) => {
  const lead = getState().lead,
    pedido = getState().pedido

  if (fase == 'Negociación') {
    window.open(
      'https://api.whatsapp.com/send?phone=5491125110601&text=Hola!%20Quiero%20informaci%C3%B3n%20y%20presupuestos%20para%20hacer%20mi%20buzo%20de%20egresados!%20',
      '_blank'
    )
  }

  dispatch({
    type: STEP.NEXT
  })

  dispatch({
    type: PEDIDO.SET_FASE,
    fase: fase
  })

  dispatch(push(getState().step))

  if (mix_environment == 'dev') {
    fetch('/api/convert_lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead, pedido: { ...pedido, fase } })
    }).then(resp => {
      switch (fase) {
        case 'Cerrado ganado':
          return go_and_pay(
            `Colegio: ${lead.colegio}, pago 100%`,
            `Compra de ${lead.cantidad} unidades`,
            pedido.precio_total * 0.85
          )
        case 'tres':
          return go_and_pay(
            `Colegio: ${lead.colegio}, pago 1/3 Cuotas`,
            `Compra de ${lead.cantidad} unidades`,
            pedido.precio_total / 3
          )
        case 'seis':
          return go_and_pay(
            `Colegio: ${lead.colegio}, pago 1/6 Cuotas`,
            `Compra de ${lead.cantidad} unidades`,
            pedido.precio_total / 6
          )
      }
    })
  }
}

const postLead = member => {
  return fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member)
  })
}
