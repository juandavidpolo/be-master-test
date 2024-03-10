import React, { useState } from "react";

import DisneyLogo from '../../assets/svg/disneyLogo';

import Step1 from "./step1";
import Step2 from "./step2";

const Login = () => {

  const [step, setStep] = useState(1)
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  function changeStep(newStep){
    if(newStep === 1){
      setUser({
        ...user,
        email: ""
      })
    }
    setStep(newStep)
  }

  function onChange(ev) {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value
    })
  }

  function login(ev){
    ev.preventDefault();
  }

  return (
    <div className="container-fluid login--view">
      <div>
        <div>
          <DisneyLogo />
        </div>
        <div>
          <div className="card">
            {step === 1 && <Step1 user={user} onChange={onChange} changeStep={changeStep} />}
            {step === 2 && <Step2 user={user} onChange={onChange} changeStep={changeStep} login={login}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;