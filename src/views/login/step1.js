import React from "react";

import InputContainer from '../../components/forms/InputContainer';

const Step1 = ({ user, onChange, changeStep }) => {

  function submitting(ev){
    ev.preventDefault();
    changeStep(2)
  }

  return(
    <div className="card-body">
      <div>
        <strong>STEP 1</strong>
        <div>
          <h1>
            Enter your email to continue
          </h1>
          <div>
            <p>
              Log in to your account. If you don't have one, you will be prompted to create one.
            </p>
          </div>
        </div>
      </div>
      <form className="custom--form" onSubmit={ev => submitting(ev)}>
        <InputContainer
          label="Email"
          name="email"
          input="text"
          value={user.email}
          onChange={onChange}
        />
        <div className="button--container">
          <button type="submit" className="btn btn-primary custom--button">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step1;