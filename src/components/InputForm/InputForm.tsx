import React from "react";
import Select from "../Select/Select.tsx";
import './InputForm.css'

const InputForm: React.FC = () => {
  return (
    <div className="inputForm">
      <input className="input" type="text"></input>
      <Select></Select>
    </div>
  );
}

export default InputForm;