import React from 'react'
import { Route } from 'react-router-dom'
import { StepTwoForm } from './step_two'
import { StepThree } from './step_three'
import { StepFour } from './step_four'
import { StepFive } from './step_five'


import '../../css/step_container.css'
import { connect } from 'react-redux'
import { nextStep, prevStep } from '../actions/steps'

const PrePresup = props => {
  console.log(props)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 step_container">
          <div>
            <Route
              path={props.match.url + '/step_two'}
              component={StepTwoForm}
            />
            <Route
              path={props.match.url + '/step_three'}
              component={StepThree}
            />
            <Route path={props.match.url + '/step_four'} component={StepFour} />
            <Route path={props.match.url + '/step_five'} component={StepFive} />
          </div>
        </div>
        <div className="col-sm-4 step_container">
          <div style={{ height: '100%' }}>
            <p>Aca La preview</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 step_container">
          <div>
            <p>Acá Saldo</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="float-right">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={props.handlePrevStep}
            >
              Anterior
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={props.handleNextStep}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  handleNextStep: nextStep,
  handlePrevStep: prevStep
}
export const Presup = connect(
  null,
  mapDispatchToProps
)(PrePresup)
