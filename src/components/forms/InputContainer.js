import React, { useState } from "react";

export const InputContainer = ({label, name, type, value, onChange, placeholder=""}) => {

  const [isFocused, setIsFocused] = useState(false);

  function focusEffect(){
    setIsFocused(true);
  }

  function blurEffect(){
    if(value === ""){
      setIsFocused(false);
    }
  }

  //TODO eye ICON for type password
  return(
    <div className={`input--container ${isFocused ? "focused" : ""}`}>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={ev => onChange(ev)}
        placeholder={placeholder}
        onFocus={() => focusEffect()}
        onBlur={() => blurEffect()}
        />
    </div>
  )
}

export default InputContainer;