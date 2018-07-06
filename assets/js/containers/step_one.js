import React from 'react'
import { GenericInput } from '../components/input'
import { connect } from 'react-redux'
import { createLead } from '../actions/lead'
import { cel_pattern } from '../patterns'

const handleSubmit = (e, createLead) => {
  e.preventDefault()
  createLead(extractValues(['colegio', 'cantidad', 'representante', 'celular']))
}
const extractValues = keys => {
  return keys.reduce(
    (prev, curr) => ({ ...prev, [curr]: document.getElementById(curr).value }),
    {}
  )
}

const PreLeadForm = props => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <form id="leadForm" onSubmit={e => handleSubmit(e, props.createLead)}>
          <GenericInput
            id="colegio"
            label="Colegio"
            placeholder="Nombre del Colegio"
            // required={true}
          />
          <GenericInput
            id="cantidad"
            label="Cantidad"
            placeholder="Cantidad de Alumnos"
            type="number"
            // required={true}
            min="15"
            max="150"
            helpText="A partir de 15 unidades"
          />
          <GenericInput
            id="representante"
            label="Representante"
            placeholder="¿ Con quien hablamos ?"
            helpText="Indique su nombre o apodo"
            // required={true}
          />
          <GenericInput
            id="celular"
            label="Celular"
            placeholder="¿ Como es tu número ?"
            helpText="Indique su número de celular con código de area (11) 2222-1111"
            // required={true}
            pattern={cel_pattern}
          />
          <button type="submit" className="btn btn-success float-right">
            Siguiente
          </button>
        </form>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = {
  createLead
}

export const LeadForm = connect(
  null,
  mapDispatchToProps
)(PreLeadForm)
