import React from "react"

export const GenericInput = props => (
  <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type || "text"}
      className="form-control"
      id={props.id}
      aria-describedby="emailHelp"
      placeholder={props.placeholder}
      required={props.required}
      pattern={props.pattern}
      min={props.min}
      max={props.max}
      onChange={props.handleChange}
      value={props.value}
    />
    <small id="emailHelp" className="form-text text-muted">
      {props.helpText}
    </small>
  </div>
)
