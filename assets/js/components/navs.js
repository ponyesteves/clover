import React from 'react'
import { connect } from 'react-redux'
import { Btn } from './misc'
import { nextStep, prevStep } from '../actions/steps'
import { convertLead } from '../actions/lead'

const PreNavs = props => {
  const nav = (() => {
    switch (props.step) {
      case 'one':
        return (
          <div className="navs_container">
            <Btn
              type="full"
              handleClick={e =>
                document.getElementById('submitFormStepOne').click()
              }
              title="Siguiente"
            />
          </div>
        )
      case 'summary':
        return (
          <div className="navs_container_summary">
            <Btn
              type="full"
              handleClick={e => props.convertLead('Cerrado ganado')}
              title="Pagar con Mercado Pago (15% Descuento)"
            />
            <Btn
              type="full"
              handleClick={e => props.convertLead('Seña')}
              title="Señar con Mercado Pago"
            />
            <Btn
              type="full"
              handleClick={e => props.convertLead('Negociación')}
              title="Solicitar Atencion Comercial"
            />
            <Btn
              type="full"
              handleClick={props.handlePrevStep}
              title="Anterior"
            />
          </div>
        )
      case 'thanks':
        return ''
      default:
        return (
          <div className="navs_container">
            <Btn
              type="half"
              handleClick={props.handlePrevStep}
              title="Anterior"
            />
            <Btn
              type="half"
              handleClick={props.handleNextStep}
              title="Siguiente"
            />
          </div>
        )
    }
  })()
  return (
    <div>
      {nav}
      <div style={{ marginTop: '1rem' }}>
        <a href="https://www.facebook.com/CloverEgresados" target="_blank">
          Para ver más fotos, visita nuestro facebook
        </a>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  handleNextStep: nextStep,
  handlePrevStep: prevStep,
  convertLead: convertLead
}
const mapStateToProps = state => ({
  step: state.step
})

export const Navs = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreNavs)
