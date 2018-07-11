import React from 'react'
import { GenericInput } from '../components/input'
import { connect } from 'react-redux'
import { createLead } from '../actions/lead'
import { nextStep } from '../actions/steps'
import { cel_pattern } from '../patterns'

const handleSubmit = (e, createLead, nextStep) => {
  e.preventDefault()
  createLead()
  nextStep()
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
        <form id="leadForm" onSubmit={e => handleSubmit(e, props.handleCreateLead, props.handleNextStep)}>
          <GenericInput
            id="colegio"
            label="Colegio"
            placeholder="Nombre del Colegio"
            value={props.lead.colegio}
            handleChange={props.handleCreateLead}
            required={true}
          />
          <GenericInput
            id="cantidad"
            label="Cantidad"
            placeholder="Cantidad de Alumnos"
            type="number"
            required={true}
            min="15"
            max="150"
            helpText="A partir de 15 unidades"
            value={props.lead.cantidad}
            handleChange={props.handleCreateLead}
          />
          <GenericInput
            id="representante"
            label="Representante"
            placeholder="¿ Con quien hablamos ?"
            helpText="Indique su nombre o apodo"
            required={true}
            value={props.lead.representante}
            handleChange={props.handleCreateLead}
          />
          <GenericInput
            id="celular"
            label="Celular"
            placeholder="¿ Como es tu número ?"
            helpText="Indique su número de celular con código de area (11) 2222-1111"
            required={true}
            pattern={cel_pattern}
            value={props.lead.celular}
            handleChange={props.handleCreateLead}
          />
          <button
            type="submit"
            className="btn btn-success float-right"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})

const mapDispatchToProps = {
  handleCreateLead: (e) =>
    createLead(
      extractValues(['colegio', 'cantidad', 'representante', 'celular'])
    ),
  handleNextStep: nextStep
}

export const LeadForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreLeadForm)
