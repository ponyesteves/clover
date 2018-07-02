import "phoenix_html";

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/phoenix.css";

import { InputText } from "./components/inputs";

const Form = props => (
  <form>
    <InputText id="colegio" label="Colegio" placeholder="Nombre del Colegio" />
    <InputText
      id="cantidad"
      label="Cantidad"
      placeholder="Cantidad de Alumnos"
    />
    <InputText
      id="representante"
      label="Representante"
      placeholder="¿ Con quien hablamos ?"
    />
    <button type="submit" className="btn btn-success">
      Siguiente
    </button>
  </form>
);

ReactDOM.render(<Form />, document.getElementById("my-react-app"));

//     <div className="form-check">
// <input type="checkbox" className="form-check-input" id="exampleCheck1" />
// <label className="form-check-label" for="exampleCheck1">
//   Check me out
// </label>
// </div>
