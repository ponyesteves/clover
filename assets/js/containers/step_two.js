import React from "react"
import { GenericInput } from "../components/input"
import { connect } from "react-redux"
const PreStepTwoForm = props => (
  <div>
    <div key={1}>{props.lead.colegio}</div>
    <form key={2}>
      <div className="container">
        <h1>Elija la combinación que más le guste...</h1>

        <label className="radio-inline">
          <input type="radio" name="survey" id="Radios1" value="Yes" />
          Yes
        </label>
        <label className="radio-inline">
          <input type="radio" name="survey" id="Radios2" value="No" />
          No
        </label>
      </div>

      <button type="submit" className="btn btn-success">
        Siguiente
      </button>
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
