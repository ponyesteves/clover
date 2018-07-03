import React from "react"
import { Link } from "react-router-dom"
import { InputText } from "../components/inputs"
import { push } from 'react-router-redux';
import { store } from "../store";
const handleSubmit = e => {
  e.preventDefault()
  store.dispatch(push("/step_two"))
}
export const LeadForm = () => (
  <form onSubmit={handleSubmit}>
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
