import React from "react";

import InputContainer from '../../components/forms/InputContainer';
import Edit from '../../assets/svg/Edit';

const Step2 = ({ user, onChange, changeStep, login }) => {
  return(
    <div className="card-body">
      <div>
        <strong>STEP 2</strong>
        <div>
          <h1>
            Enter your password
          </h1>
          <div>
            <p>
              Log into your account with your email: {user.email}
            </p>
            <p>change email <span onClick={() => { changeStep(1) }}><Edit color="#6f42c1"/></span></p>
          </div>
        </div>
      </div>
      <form className="custom--form" onSubmit={ev => { login(ev)}}>
        <InputContainer
          type="password"
          label="Password"
          name="password"
          input="password"
          value={user.password}
          onChange={onChange}
        />
        <div className="button--container">
          <button type="button" className="btn btn-primary custom--button">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step2;