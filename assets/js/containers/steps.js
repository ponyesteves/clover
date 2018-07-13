import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Steps
import { StepOne } from './step_one'
import { StepTwo } from './step_two'
import { StepThree } from './step_three'
import { StepFour } from './step_four'
import { StepFive } from './step_five'
import { Summary } from './summary'
import { Thanks } from './thanks'

// Navs
import { Navs } from '../components/navs'

// Detalle de Pedido
import { Pedido } from '../components/pedido'

import '../../css/step_container.css'

const stepsAvailable = [
  { path: 'one', component: StepOne },
  { path: 'two', component: StepTwo },
  { path: 'three', component: StepThree },
  { path: 'four', component: StepFour },
  { path: 'five', component: StepFive },
  { path: 'summary', component: Summary },
  { path: 'thanks', component: Thanks }
]

const PreSteps = props => {
  return (
    <div className="main_container">
      <div className="step_container">
        {stepsAvailable.map((step, idx) => (
          <Route
            key={idx}
            path={`${props.match.url}/${step.path}`}
            component={step.component}
          />
        ))}
      </div>
      <Pedido />
      <Navs />
    </div>
  )
}

export const Steps = connect(
  null,
  null
)(PreSteps)
