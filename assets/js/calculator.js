import React from 'react'
import ReactDOM from 'react-dom'
const row_id = window.row_id

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: '5', sisa: 0, largo: 0, talle: 0 }
  }

  componentDidMount() {
    this.activateTalles()
  }

  handleChange(ev) {
    this.setState(() => { id: ev.target.id })
  }
  
  updateStateOf(key, ev){
    const value = parseInt(ev.target.value)
    this.setState(() =>  {
      return {[key]: value}
    },this.calculateTalle )
    
  }

  calculateTalle() {
    this.setState((prevState) => ({ talle: prevState.largo * prevState.sisa }), () => console.log(this.state))
  }

  activateTalles() {
    const inputs_talle = document.getElementsByClassName('talle')
    Array.from(inputs_talle).map(talle =>
      talle.addEventListener('change', this.handleChange.bind(this))
    )
  }

  render() {
    return (
      <div>
        <input
          type="number"
          val={this.state.sisa}
          onChange={this.updateStateOf.bind(this,'sisa')}
        />
        <input
          type="number"
          val={this.state.largo}
          onChange={this.updateStateOf.bind(this,'largo')}
        />
      </div>
    )
  }
}
ReactDOM.render(<Calculator />, document.getElementById('calculator'))
