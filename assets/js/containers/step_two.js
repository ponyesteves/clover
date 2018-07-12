import React from 'react'
import { RadioOptionRow } from '../components/option_row'
import { connect } from 'react-redux'
import { StepTitle } from '../components/misc'

const PreStepTwo = () => (
  <div>
    <StepTitle>¿ Que vas a elegir ?</StepTitle>
    <RadioOptionRow options={['Buzo', 'Campera']} group_name="buzo_campera" />
    <br />
    <RadioOptionRow
      options={['Chomba', 'Remera', 'Nada']}
      group_name="chomba_remera_nada"
    />
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})

export const StepTwo = connect(
  mapStateToProps,
  null
)(PreStepTwo)
