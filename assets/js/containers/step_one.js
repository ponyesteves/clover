import React from 'react'
import { GenericInput } from '../components/input'
import { connect } from 'react-redux'
import { createLead, sumbitLead } from '../actions/lead'
import { nextStep } from '../actions/steps'
import { cel_pattern } from '../patterns'

const handleSubmit = (e, sumbitLead, nextStep) => {
  e.preventDefault()
  sumbitLead()
  nextStep()
}

const extractValues = keys => {
  return keys.reduce(
    (prev, curr) => ({ ...prev, [curr]: document.getElementById(curr).value }),
    {}
  )
}

const PreStepOne = props => (
  <div>
    <form
      id="stepOneForm"
      onSubmit={e =>
        handleSubmit(e, props.sumbitLead, props.handleNextStep)
      }
    >
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
        min="1"
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
        helpText="Indique su número de celular con código de area 11-2222-1111"
        required={true}
        pattern={cel_pattern}
        value={props.lead.celular}
        handleChange={props.handleCreateLead}
      />
      <button
        type="submit"
        id="submitFormStepOne"
        style={{ display: 'none' }}
      />
    </form>
  </div>
)

const mapStateToProps = state => ({
  lead: state.lead
})

const mapDispatchToProps = {
  handleCreateLead: e =>
    createLead(
      extractValues(['colegio', 'cantidad', 'representante', 'celular'])
    ),
  sumbitLead,
  handleNextStep: nextStep
}

export const StepOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreStepOne)
