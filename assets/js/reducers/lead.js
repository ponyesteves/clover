import { LEAD } from "../constants"

export const lead = (state = {} , action) => {
  switch (action.type) {
    case LEAD.CREATE:
      return action.member
    default:
      return state
  }
}
