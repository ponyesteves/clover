import React from 'react'
import { RadioOptionRow } from '../components/option_row'
import { connect } from 'react-redux'
import { StepTitle } from '../components/misc'

const PreStepTwo = () => (
  <div>
    <StepTitle>¿ Que vas a elegir ?</StepTitle>
    <RadioOptionRow options={['Buzo', 'Campera']} group_name="buzo_campera" />
    <br />
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})

export const StepTwo = connect(
  mapStateToProps,
  null
)(PreStepTwo)
