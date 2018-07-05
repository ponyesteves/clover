import React from "react"
import { GenericInput } from "../components/input"

export const StepTwoForm = () => (
  <form>
    <GenericInput id="Buzo" label="Buzo" placeholder="Nombre del Colegio" />
    <button type="submit" className="btn btn-success">
      Siguiente
    </button>
  </form>
)
