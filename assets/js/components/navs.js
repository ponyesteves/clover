import React from 'react'
import { connect } from 'react-redux'
import { Btn } from './misc'
import { nextStep, prevStep } from '../actions/steps'
import { convertLead } from '../actions/lead'
import NumberFormat from 'react-number-format'

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
              handleClick={e => props.convertLead('tres')}
              title="Señar 1 de 3 cuotas con Mercado Pago. Valor Cuota: "
            >
              <NumberFormat
                value={props.precio_tres_cuotas}
                displayType={'text'}
                thousandSeparator={true}
                prefix="$"
                decimalScale = {2}
              />
            </Btn>
            <Btn
              type="full"
              handleClick={e => props.convertLead('seis')}
              title="Señar 1 de 6 cuotas con Mercado Pago. Valor Cuota: "
            >
              <NumberFormat
                value={props.precio_seis_cuotas}
                displayType={'text'}
                thousandSeparator={true}
                prefix="$"
                decimalScale = {2}

              />
            </Btn>
            <Btn
              type="full"
              handleClick={e => props.convertLead('Negociación')}
              title="Contactanos por WhatsApp"
            />
            <a href="#" onClick={props.handlePrevStep}>
              <h4> quiero modificar algo...</h4>
            </a>
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
      <div
        style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
      >
        <a href="https://www.instagram.com/weclover.egresados/" target="_blank">
          <img src="../../images/instagram.png" />
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
  step: state.step,
  precio_tres_cuotas: state.pedido.precio_total / 3,
  precio_seis_cuotas: state.pedido.precio_total / 6
})

export const Navs = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreNavs)
