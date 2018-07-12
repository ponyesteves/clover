import React from 'react'
import { connect } from 'react-redux'
import { RadioOptionRow } from '../components/option_row'
import { StepTitle } from '../components/misc'

const PreStepFive = props => (
  <div>
    <StepTitle>¿ Cuantos Bordados ?</StepTitle>
    <RadioOptionRow
      options={['hasta_tres', 'hasta_seis']}
      group_name="bordados"
    />
  </div>
)
const mapStateToProps = state => {
  return { lead: state.lead }
}
export const StepFive = connect(mapStateToProps)(PreStepFive)
