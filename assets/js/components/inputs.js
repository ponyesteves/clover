import React from "react"

export const InputText = props => (
  <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type || "text"}
      className="form-control"
      id={props.id}
      aria-describedby="emailHelp"
      placeholder={props.placeholder}
    />
    <small id="emailHelp" className="form-text text-muted">
      {props.helpText}
    </small>
  </div>
)
