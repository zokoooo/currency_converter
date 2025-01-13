import React from "react";
import Select from "../Select/Select.tsx";
import './InputForm.css'
import {converter, costPerOne} from "../../functions.ts";
import {useAppSelector, useAppDispatch, setInputTo, setInputFrom} from "../../store/store.ts";

interface InputFormProps {
  type: "from" | "to";
}

const InputForm: React.FC<InputFormProps> = ({ type }) => {

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => state.reducerCountry);

  const stateInput = useAppSelector(state => type == 'to' ? state.reducerInput.inputTo : state.reducerInput.inputFrom);
  const dispatch = useAppDispatch();

  if (!charCodes) return;

  return (
    <div className="inputForm">
      {`${type == 'to' ? `≈ ${costPerOne.call(charCodes, country.countryTo, country.countryFrom)} ${country.countryTo}` : `1 ${country.countryFrom}`}`}
      <input value={stateInput ?? ''} className="input" type="text" onChange={(e) => {
        switch (type) {
          case 'from':
            dispatch(setInputFrom(parseFloat(e.target.value)));
            dispatch(setInputTo(converter.call(charCodes, country.countryTo, country.countryFrom, parseFloat(e.target.value))));
            break;
          case 'to':
            dispatch(setInputTo(parseFloat(e.target.value)));
            dispatch(setInputFrom(converter.call(charCodes,  country.countryTo, country.countryFrom, parseFloat(e.target.value))));
            break;
          default:
            return;
        }
      }}></input>
      <Select type={type}></Select>
    </div>
  );
}

export default InputForm;