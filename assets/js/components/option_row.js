import React from 'react'

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

export const RadioOptionItem = props => {
  return (
    <div className="option">
      <label htmlFor="exampleRadios1">{props.label}</label>
      <img src="../images/buzo.png" />
      <input type="radio" name={props.group_name} value={props.option_value} />
    </div>
  )
}
