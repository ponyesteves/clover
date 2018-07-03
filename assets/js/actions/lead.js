import { LEAD } from "../constants"

export const createLead = () => dispatch => {
  dispatch({
    type: LEAD.CREATE,
    member: "HOLA"
  })
}
