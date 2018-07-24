import React from 'react'
import ReactDOM from 'react-dom'
const row_id = window.row_id

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '5',
      sisa: 0,
      largo: 0,
      talle: 0,
      css: 'none',
      alias: ''
    }
  }

  componentDidMount() {
    this.activateTalles()
    document.addEventListener('keydown', ev => {
      if (ev.keyCode == 27) return this.setState(() => ({ css: 'none' }))
      if (ev.keyCode == 13) return this.calculateTalle()
    })
  }

  handleFocus(ev) {
    console.log(`user_student_${ev.target.dataset['idx']}_alias`)
    this.setState(() => ({
      id: ev.target.id,
      css: 'block',
      alias: document.getElementById(
        `user_students_${ev.target.dataset['idx']}_alias`
      ).value
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
      const { largo, sisa } = prevState
      const talle = (() => {
        if ( largo <= 57 && sisa <= 46 ) return 1
        if ( largo <= 59 && sisa <= 49 ) return 2
        if ( largo <= 60 && sisa <= 52 ) return 3
        if ( largo <= 66 && sisa <= 54 ) return 4
        if ( largo <= 66 && sisa <= 57 ) return 5
        if ( largo <= 68 && sisa <= 60 ) return 6
        return 1
      })()

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
          <h3 style={{ textAlign: 'center' }}>
            {' '}
            Talle para{' '}
            {this.state.alias ||
              'falta indicar el alias de para este talle'}{' '}
          </h3>
        </div>
        <div className="calculator_row">
          <div className="calculator_column">

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
                  Largo de torso: Linea A
                </p>
              </small>
            </div>
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
                  Largo de sisa: Linea B <br/>
                </p>
              </small>
            </div>
          </div>
          <div className="calculator_column">
              <img src="../../images/medidas.png" />
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

        <div className="calculator_row">
          <a
            className="btn btn-warning"
            style={{ width: '100%' }}
            onClick={this.calculateTalle.bind(this)}
          >
            Volver
          </a>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Calculator />, document.getElementById('calculator'))
