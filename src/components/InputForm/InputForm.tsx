import React from "react";
import Select from "../Select/Select.tsx";
import './InputForm.css'

interface InputFormProps {
  type: "from" | "to";
}

const InputForm: React.FC<InputFormProps> = ({ type }) => {
  return (
    <div className="inputForm">
      
      <input className="input" type="text"></input>
      <Select type={type}></Select>
    </div>
  );
}

export default InputForm;