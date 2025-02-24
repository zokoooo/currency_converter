import React from 'react'
import {useAppSelector} from "../../store/store.ts";
import {converter, formatNumberWithSpaces} from "../../functions.ts";
import Select from "../Select/Select.tsx";

import './Output.scss'

const Output: React.FC = () => {

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => state.reducerCountry);
  const stateOutput =  useAppSelector(state => state.reducerInput.inputTo)

  if (!charCodes) {return (<div>Loading...</div>)}

  const formatValue = formatNumberWithSpaces(stateOutput ?? 0)

  return (
    <div className="output">
      {`≈ ${converter(charCodes, country.countryTo, country.countryFrom)} ${country.countryTo}`}
      <div className="output__value">{formatValue}</div>
      <Select type={'to'}></Select>
    </div>
  );
}

export default Output;