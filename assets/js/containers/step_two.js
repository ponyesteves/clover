import React from 'react'
import { RadioOptionRow } from '../components/option_row'
import { connect } from 'react-redux'
const PreStepTwoForm = props => (
  <div>
      <div className="container">
        <h2 className="title">¿ Que vas a elegir ?</h2>
        <RadioOptionRow
          options={['Buzo', 'Campera']}
          group_name="buzo_campera"
        />
        <br />
        <RadioOptionRow
          options={['Chomba', 'Remera', 'Nada']}
          group_name="chomba_remera_nada"
        />
      </div>
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})
export const StepTwoForm = connect(
  mapStateToProps,
  null
)(PreStepTwoForm)
