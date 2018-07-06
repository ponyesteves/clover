import React from 'react'
import { connect } from 'react-redux'
import { RadioOptionRow } from '../components/option_row'

const PreStepFour = props => (
  <div>
    <div key={1}>{props.lead.colegio}</div>
    <form key={2}>
      <div className="container">
        <h1>Elija la combinación que más le guste...</h1>
        <RadioOptionRow
          options={['lisa', 'corderito', 'estampado']}
          group_name="capucha"
        />
      </div>
    </form>
  </div>
)
const mapStateToProps = (state) => {
  return {lead: state.lead}
}
export const StepFour = connect(mapStateToProps)(PreStepFour)
