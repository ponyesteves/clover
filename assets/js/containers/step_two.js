import React from 'react'
import { GenericInput } from '../components/input'
import { connect } from 'react-redux'
const PreStepTwoForm = props => (
  <div>
    <div key={1}>{props.lead.colegio}</div>
    <form key={2}>
      <div className="container">
        <h1>Elija la combinación que más le guste...</h1>
        <div className="option_row">
          <div className="option">
            <label htmlFor="exampleRadios1">
              Buzo
            </label>
            <input
              type="radio"
              name="buzo_campera"
              value="buzo"
            />
          </div>
          <div className="option">
            <label htmlFor="exampleRadios1">
              Campera
            </label>
            <input
              type="radio"
              name="buzo_campera"
              value="campera"
            />
          </div>
        </div>
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
