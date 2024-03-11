import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../storeReducer/actions";
import { getUser } from "../../utils/complements";

import DisneyLogo from '../../assets/svg/disneyLogo';

import Step1 from "./step1";
import Step2 from "./step2";

const Login = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);
  const navigate = useNavigate();

  const userData = getUser();

  useEffect(()=>{
    if (data.userLogged || userData !== null) {
      navigate("/")
    }
  }, [data])

  const [step, setStep] = useState(1)
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  function changeStep(newStep){
    if(newStep === 1){
      setUser({
        ...user,
        email: "",
        password: ""
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
    dispatch(loginUser(user));
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