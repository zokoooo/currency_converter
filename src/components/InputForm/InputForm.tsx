import React from "react";
import Select from "../Select/Select.tsx";
import './InputForm.scss'
import { useAppSelector } from "../../store/store.ts";
import Input from '../Input/Input.tsx'

const InputForm: React.FC = () => {

  const country = useAppSelector(state => state.reducerCountry.countryFrom);

  return (
    <div className="input-form">
      {`1 ${country}`}
      <Input />
      <Select type={'from'}></Select>
    </div>
  );
}

export default InputForm;