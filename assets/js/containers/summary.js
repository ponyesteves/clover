import React from 'react'
import { connect } from 'react-redux'
import { StepTitle, SummaryItem } from '../components/misc'
import { humanize } from '../lib/helpers'
const PreSummary = props => (
  <div className="summary_container">
    <StepTitle>Repasemos su pedido</StepTitle>
    <SummaryItem
      label="Producto"
      value={build_producto(
        props.options.buzo_campera,
        props.options.chomba_remera_nada
      )}
    />
    <SummaryItem label="Colores" value={humanize(props.options.colores)} />
    <SummaryItem label="Capucha" value="Corderito" />
    <SummaryItem label="Bordados" value="Hasta Seis" />
    <br/>
    <SummaryItem label="Para" value={"Colegio " + props.lead.colegio} />
    <SummaryItem label="Contacto" value={props.lead.representante} />
    <SummaryItem label="Celular" value={props.lead.celular} />

  </div>
)

const build_producto = (buzo_campera, chomba_remera_nada) => {
  let ary = [humanize(buzo_campera)]
  if (chomba_remera_nada != 'nada') {
    ary.push(chomba_remera_nada)
  }
  return ary.join(' y ')
}

const mapStateToProps = state => {
  return { options: state.options, lead: state.lead }
}

export const Summary = connect(mapStateToProps)(PreSummary)
