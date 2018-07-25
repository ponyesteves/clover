import React from 'react'
import { connect } from 'react-redux'
import { StepTitle, BigOK, BigWait } from '../components/misc'

const wait = () => (
  <div className="thanks_container">
    <StepTitle>Espere por favor</StepTitle>
    <StepTitle>
      <div id="dots"><p>.</p></div>
    </StepTitle>
    <BigWait />
    <br />
  </div>
)
const thanks = () => (
  <div className="thanks_container">
    <StepTitle>Gracias por solicitud</StepTitle>
    <BigOK />
    <br />
    <StepTitle>Pronto los contactaremos :-)</StepTitle>
  </div>
)

const loadingFx = (dots = []) => {
  setTimeout(() => {
    dots.push('.')
    document.getElementById('dots').innerHTML = `<p>${dots.join('')}</p>`
    loadingFx(dots)
  }, 500)
}

class PreThanks extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    loadingFx()
  }

  render() {
    if (this.props.fase == 'Negociación') return thanks()
    return wait()
  }
}

const mapStateToProps = state => {
  return { options: state.options, lead: state.lead, fase: state.pedido.fase }
}

export const Thanks = connect(mapStateToProps)(PreThanks)
