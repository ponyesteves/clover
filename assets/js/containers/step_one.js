import React from "react"
import { InputText } from "../components/inputs"
import { connect } from "react-redux"
import { createLead } from "../actions/lead"

const handleSubmit = (e, createLead) => {
  e.preventDefault()
  createLead(extractValues(["colegio", "cantidad", "representante"]))
}
const extractValues = (keys) => {
  return keys.reduce((prev, curr) => ({...prev, [curr]: document.getElementById(curr).value}), {})
}

const PreLeadForm = props => (
  <form id="leadForm" onSubmit={e => handleSubmit(e, props.createLead)}>
    <InputText
      id="colegio"
      label="Colegio"
      placeholder="Nombre del Colegio"
      required={true}
    />
    <InputText
      id="cantidad"
      label="Cantidad"
      placeholder="Cantidad de Alumnos"
      type="number"
      required={true}
      min="15"
      max="150"
      helpText="A partir de 15 unidades"
    />
    <InputText
      id="representante"
      label="Representante"
      placeholder="¿ Con quien hablamos ?"
      helpText="Indique su nombre o apodo"
      required={true}
    />
    <button type="submit" className="btn btn-success">
      Siguiente
    </button>
  </form>
)

const mapDispatchToProps = {
  createLead
}

export const LeadForm = connect(
  null,
  mapDispatchToProps
)(PreLeadForm)
