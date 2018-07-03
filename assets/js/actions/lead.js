import { LEAD } from "../constants"

export const createLead = (member) => dispatch => {
  dispatch({
    type: LEAD.CREATE,
    member
  })
}
