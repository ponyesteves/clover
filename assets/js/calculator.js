import React from 'react'
import ReactDOM from 'react-dom'
const row_id = window.row_id

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: '5', sisa: 0, largo: 0, talle: 0, css: 'none' }
  }

  componentDidMount() {
    this.activateTalles()
    document.addEventListener("keydown", (ev) => {
      if(ev.keyCode == 27)
        return this.setState(() => ({css: 'none'}))
      if(ev.keyCode == 13)
        return this.calculateTalle()
    })
  }

  handleFocus(ev) {
    this.setState(() => ({
      id: ev.target.id,
      css: 'block'
    }))
  }

  updateStateOf(key, ev) {
    const value = parseInt(ev.target.value)
    this.setState(() => {
      return { [key]: value }
    })
  }

  calculateTalle() {
    this.setState(prevState => {
      const talle = prevState.largo * prevState.sisa
      document.getElementById(prevState.id).value = talle
      return { talle, css: 'none' }
    })
  }

  activateTalles() {
    const inputs_talle = document.getElementsByClassName('talle')
    Array.from(inputs_talle).map(talle =>
      talle.addEventListener('focus', this.handleFocus.bind(this))
    )
  }

  render() {
    return (
      <div className="calculator_container" style={{ display: this.state.css }}>
        <div className="calculator_row">
          <div className="form-group">
            <label>Sisa</label>
            <input
              type="number"
              val={this.state.sisa}
              onChange={this.updateStateOf.bind(this, 'sisa')}
              className="form-control"
              aria-describedby="sisaHelp"
              placeholder="Medida en centimetros"
            />
            <small id="sisaHelp" className="form-text text-muted">
              <p>
                Largo de sisa: Para medir el largo de sisa situaremos la cinta
                métrica en el hombro (donde sobresalga el hueso del hombro), y
                mediremos hasta la parte baja del brazo. Esta medida se toma con
                cierta holgura no midiendo justo en la axila sino 2 o 3 cms por
                debajo.
              </p>
            </small>
          </div>
          <div className="form-group">
            <label>Largo</label>
            <input
              type="number"
              val={this.state.sisa}
              onChange={this.updateStateOf.bind(this, 'largo')}
              className="form-control"
              aria-describedby="largoHelp"
              placeholder="Medida en centimetros"
            />
            <small id="largoHelp" className="form-text text-muted">
              <p>
                Largo de torso: Se mide desde la base del cuello hasta la
                cintura
              </p>
            </small>
          </div>
        </div>
        <div className="calculator_row">
          <a
            className="btn btn-success"
            style={{ width: '100%' }}
            onClick={this.calculateTalle.bind(this)}
          >
            Guardar
          </a>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Calculator />, document.getElementById('calculator'))
