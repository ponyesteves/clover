import { LEAD } from '../constants'
const initLead = {
  colegio: '',
  cantidad: '',
  representante: '',
  celular: ''
}
export const lead = (state = initLead, action) => {
  switch (action.type) {
    case LEAD.CREATE:
      return action.member
    default:
      return state
  }
}
