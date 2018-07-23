import React from 'react'
import { connect } from 'react-redux'
import { humanize } from '../lib/helpers'
import { change_option } from '../actions/options'
export const RadioOptionRow = props => {
  return (
    <div className="option_row">
      {props.options.map((option, idx) => {
        return (
          <RadioOptionItem
            key={idx}
            label={option}
            group_name={props.group_name}
            option_value={option.toLowerCase()}
          />
        )
      })}
    </div>
  )
}

const PreRadioOptionItem = props => {
  return (
    <div className="option">
      <label htmlFor={props.label}>
        <div>{humanize(props.label)}</div>
        <img htmlFor={props.label} src="../../images/buzo.png" />
      </label>
      <input
        id={props.label}
        type="radio"
        name={props.group_name}
        value={props.option_value}
        onChange={e => {
          props.handleChange(
            props.group_name,
            props.option_value,
            e.target.checked
          )
        }}
        checked={props.options[props.group_name] == props.option_value}
      />
    </div>
  )
}

const mapDispatchToProps = {
  handleChange: change_option
}
const mapStateToProps = state => {
  return {
    options: state.options
  }
}

const RadioOptionItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreRadioOptionItem)
