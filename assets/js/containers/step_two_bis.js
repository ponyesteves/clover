import React from 'react'
import { RadioOptionRow } from '../components/option_row'
import { connect } from 'react-redux'
import { StepTitle } from '../components/misc'

const PreStepTwoBis = () => (
  <div>
    <StepTitle>¿ Van a querer chomba o remera ?</StepTitle>
    <RadioOptionRow
      options={['Chomba', 'Remera', 'No']}
      group_name="chomba_remera_nada"
    />
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})

export const StepTwoBis = connect(
  mapStateToProps,
  null
)(PreStepTwoBis)
