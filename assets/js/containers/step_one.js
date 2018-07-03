import React from "react"
import { InputText } from "../components/inputs"
import { connect } from "react-redux"
import {  createLead } from "../actions/lead"

const handleSubmit = (e, fx) => {
  e.preventDefault()
  fx()
}

const PreLeadForm = (props) => (
  <form onSubmit={(e) => handleSubmit(e, props.createLead)}>
    <InputText id="colegio" label="Colegio" placeholder="Nombre del Colegio" />
    <InputText
      id="cantidad"
      label="Cantidad"
      placeholder="Cantidad de Alumnos"
    />
    <InputText
      id="representante"
      label="Representante"
      placeholder="¿ Con quien hablamos ?"
      helpText="Indique el nombre del interlocutor"
    />
    <button type="submit" className="btn btn-success">
      Siguiente
    </button>
  </form>
)

const mapDispatchToProps = {
  createLead
}

export const LeadForm = connect(null, mapDispatchToProps)(PreLeadForm)
