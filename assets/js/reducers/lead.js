import { LEAD } from '../constants'
const initLead = createInitLead()

export const lead = (state = initLead, action) => {
  switch (action.type) {
    case LEAD.CREATE:
      return action.member
    default:
      return state
  }
}

function createInitLead() {
  if (mix_environment == 'dev')
    return {
      id: 'fake_id',
      colegio: 'YYY',
      cantidad: 10,
      representante: 'TTT',
      celular: '11-2234-9046'
    }
  return {
    id: null,
    colegio: '',
    cantidad: '',
    representante: '',
    celular: ''
  }
}
