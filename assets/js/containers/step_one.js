import React from "react"
import { Link } from "react-router-dom"
import { InputText } from "../components/inputs"
const handleSubmit = e => {
  e.preventDefault()
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
    />
    <Link to="/step_two" className="btn btn-success">
      Siguiente
    </Link>
  </form>
)
