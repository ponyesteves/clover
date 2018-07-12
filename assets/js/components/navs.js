import React from 'react'
import { connect } from 'react-redux'

import { nextStep, prevStep } from '../actions/steps'


const PreNavs = props => {
  if (props.step == 'one') {
    return (
      <div className="row">
        <a className="btn btn-success" onClick={(e) => document.getElementById("submitFormStepOne").click()}>
          Siguiente
        </a>
      </div>
    )
  }
  return (
    <div className="row">
      <div className="nav">
        <a className="btn btn-success" onClick={props.handlePrevStep}>
          Anterior
        </a>
      </div>
      <div className="nav">
        <a className="btn btn-success" onClick={props.handleNextStep}>
          Siguiente
        </a>
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  handleNextStep: nextStep,
  handlePrevStep: prevStep
}
const mapStateToProps = state => ({
  step: state.step
})

export const Navs = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreNavs)
