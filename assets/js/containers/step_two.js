import React from "react"
import { InputText } from "../components/inputs"

export const StepTwoForm = () => (
  <form>
    <InputText id="Buzo" label="Buzo" placeholder="Nombre del Colegio" />
    <button type="submit" className="btn btn-success">
      Siguiente
    </button>
  </form>
)
