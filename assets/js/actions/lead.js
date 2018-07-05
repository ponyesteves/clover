import { LEAD } from "../constants"
import { push } from "react-router-redux"
export const createLead = (member) => dispatch => {
  // Post To API /lead
  dispatch(push('/step_two'))
  dispatch({
    type: LEAD.CREATE,
    member
  })
}
