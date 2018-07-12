import React from 'react'
import { Route } from 'react-router-dom'

// Detalle de Pedido
import { Pedido } from '../components/pedido'
// Steps
import { StepTwoForm } from './step_two'
import { StepThree } from './step_three'
import { StepFour } from './step_four'
import { StepFive } from './step_five'
// Navs
import { Navs } from '../components/navs'

import '../../css/step_container.css'
import { connect } from 'react-redux'

const PrePresup = props => {
  return (
    <div className="main_container">
      <Route path={props.match.url + '/step_two'} component={StepTwoForm} />
      <Route path={props.match.url + '/step_three'} component={StepThree} />
      <Route path={props.match.url + '/step_four'} component={StepFour} />
      <Route path={props.match.url + '/step_five'} component={StepFive} />
      <Pedido />
      <Navs />
    </div>
  )
}


export const Presup = connect(
  null,
  null
)(PrePresup)
