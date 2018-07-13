import { LEAD } from '../constants'
const initLead = {
  id: null,
  colegio: 'Santos Padres',
  cantidad: 35,
  representante: 'Pepito',
  celular: '11-2234-9046'
}
export const lead = (state = initLead, action) => {
  switch (action.type) {
    case LEAD.CREATE:
      return action.member
    default:
      return state
  }
}
