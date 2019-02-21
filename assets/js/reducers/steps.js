import { STEP } from '../constants'

export const step = (state = 'one', action) => {
  switch (action.type) {
    case STEP.NEXT:
      return nextStep(state)
    case STEP.PREV:
      return prevStep(state)

    default:
      return state
  }
}

const posible_steps = ['one', 'two', 'three', 'four', 'five', 'six', 'summary', 'thanks']

const nextStep = state => {
  const idx = posible_steps.findIndex(step => step == state)
  return posible_steps[idx + 1] || state
}

const prevStep = state => {
  const idx = posible_steps.findIndex(step => step == state)
  return posible_steps[idx - 1] || state
}
