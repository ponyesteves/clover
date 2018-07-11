import { STEP } from '../constants'

export const step = (state = "step_two" , action) => {
  switch (action.type) {
    case STEP.NEXT:
      return nextStep(state)
    case STEP.PREV:
      return prevStep(state)

    default:
      return state
  }
}

const posible_steps = ["step_two","step_three", "step_four", "step_five"]

const nextStep = (state) => {
  const idx = posible_steps.findIndex(step => step == state )
  return posible_steps[idx + 1] || state
}

const prevStep = (state) => {
  const idx = posible_steps.findIndex(step => step == state )
  return posible_steps[idx - 1] || state
}
