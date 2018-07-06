import React from 'react'
import { Route } from 'react-router-dom'
import {StepTwoForm} from './step_two'
import '../../css/step_container.css'
export const Presup = (props) => {
  console.log(props)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 step_container">
          <Route path={props.match.url + "/step_two"} component={StepTwoForm} />
        </div>
        <div className="col-sm-4">
          <p>Aca La preview</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>Acá Saldo</p>
        </div>
      </div>
    </div>
  )
}
