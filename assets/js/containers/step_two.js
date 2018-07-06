import React from 'react'
import { RadioOptionRow } from '../components/option_row'
import { connect } from 'react-redux'
const PreStepTwoForm = props => (
  <div>
    <div key={1}>{props.lead.colegio}</div>
    <form key={2}>
      <div className="container">
        <h1>Elija la combinación que más le guste...</h1>
        <RadioOptionRow
          options={['Buzo', 'Campera']}
          group_name="buzo_campera"
        />
        <br />
        <RadioOptionRow
          options={['Remera', 'Chomba', 'No']}
          group_name="remera_chomba"
        />
      </div>
    </form>
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})
export const StepTwoForm = connect(
  mapStateToProps,
  null
)(PreStepTwoForm)
