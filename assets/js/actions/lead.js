import { LEAD } from '../constants'
import { app_base } from '../config'

import { push } from 'react-router-redux'
export const createLead = member => dispatch => {
  // Post To API /lead
  dispatch(push(`${app_base}/step_two`))
  dispatch({
    type: LEAD.CREATE,
    member
  })
}
