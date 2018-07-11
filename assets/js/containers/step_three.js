import React from 'react'
import { connect } from 'react-redux'
import { RadioOptionRow } from '../components/option_row'
import { StepTitle} from "../components/misc"
const PreStepThree = props => (
  <div>
    <div key={1}>{props.lead.colegio}</div>
    <form key={2}>
      <div className="container">
        <StepTitle>¿ Cuanto colores ?</StepTitle>
        <RadioOptionRow
          options={['Uno', 'Dos', 'Tres']}
          group_name="colores"
        />
      </div>
    </form>
  </div>
)
const mapStateToProps = (state) => {
  return {lead: state.lead}
}
export const StepThree = connect(mapStateToProps)(PreStepThree)
