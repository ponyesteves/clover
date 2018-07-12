import React from 'react'
import { connect } from 'react-redux'

import { nextStep, prevStep } from '../actions/steps'

const PreNavs = props => (
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

const mapDispatchToProps = {
  handleNextStep: nextStep,
  handlePrevStep: prevStep
}

export const Navs = connect(
  null,
  mapDispatchToProps
)(PreNavs)
