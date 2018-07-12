import React from 'react'
import { connect } from 'react-redux'
import { RadioOptionRow } from '../components/option_row'
import { StepTitle } from '../components/misc'

const PreStepFour = props => (
  <div>
    <StepTitle>¿ Que tipo de Capucha quieren ?</StepTitle>
    <RadioOptionRow
      options={['lisa', 'corderito', 'estampado']}
      group_name="capucha"
    />
  </div>
)
const mapStateToProps = state => {
  return { lead: state.lead }
}
export const StepFour = connect(mapStateToProps)(PreStepFour)
