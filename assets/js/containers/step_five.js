import React from 'react'
import { connect } from 'react-redux'
import { RadioOptionRow } from '../components/option_row'

const PreStepFive = props => (
  <div>
    <div key={1}>{props.lead.colegio}</div>
    <form key={2}>
      <div className="container">
        <h1>Elija la combinación que más le guste...</h1>
        <RadioOptionRow
          options={['hasta_tres', 'hasta_seis']}
          group_name="bordados"
        />
      </div>
    </form>
  </div>
)
const mapStateToProps = (state) => {
  return {lead: state.lead}
}
export const StepFive = connect(mapStateToProps)(PreStepFive)
