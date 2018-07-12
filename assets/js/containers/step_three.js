import React from 'react'
import { connect } from 'react-redux'
import { RadioOptionRow } from '../components/option_row'
import { StepTitle } from '../components/misc'
const PreStepThree = props => (
  <div>
    <StepTitle>¿ Cuantos colores quieren ?</StepTitle>
    <RadioOptionRow options={['uno', 'dos', 'tres']} group_name="colores" />
  </div>
)
const mapStateToProps = state => {
  return { lead: state.lead }
}
export const StepThree = connect(mapStateToProps)(PreStepThree)
