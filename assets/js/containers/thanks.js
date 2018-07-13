import React from 'react'
import { connect } from 'react-redux'
import { StepTitle, BigOK } from '../components/misc'
const PreThanks = props => (
  <div className="thanks_container">
    <StepTitle>Gracias por solicitud</StepTitle>
    <BigOK />
    <br />
    <StepTitle>Pronto los contactaremos :)</StepTitle>
  </div>
)


const mapStateToProps = state => {
  return { options: state.options, lead: state.lead }
}

export const Thanks = connect(mapStateToProps)(PreThanks)
