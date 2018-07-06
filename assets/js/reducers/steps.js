import { STEP } from '../constants'

export const step = (state = "step_two" , action) => {
  switch (action.type) {
    case STEP.NEXT:
      return nextStep(state)
    default:
      return state
  }
}

const posible_steps = ["step_two","step_three"]
const nextStep = (state) => {
  const idx = posible_steps.findIndex(step => step == state )
  return posible_steps[idx + 1]
}
