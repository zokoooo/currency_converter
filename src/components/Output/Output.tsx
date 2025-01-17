import React from 'react'
import {useAppSelector} from "../../store/store.ts";
import {converter, formatNumberWithSpaces} from "../../functions.ts";
import Select from "../Select/Select.tsx";

import './Output.css'

interface FontSize {
  fontSize: string
}

const Output: React.FC = () => {

  const calcFontSize = (len: number): FontSize => {
    return {fontSize: len > 14 && len <= 17 ? '32px' :
                      len > 17 && len < 25 ? '24px' :
                      '40px'
            };
  }

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => state.reducerCountry);
  const stateOutput =  useAppSelector(state => state.reducerInput.inputTo)

  if (!charCodes) {return (<div>Loading...</div>)}

  const formatValue = formatNumberWithSpaces(stateOutput ?? 0)

  return (
    <div className="inputForm">
      {`≈ ${converter(charCodes, country.countryTo, country.countryFrom)} ${country.countryTo}`}
      <div className="output" style={calcFontSize(formatValue.length)}>{formatValue}</div>
      <Select type={'to'}></Select>
    </div>
  );
}

export default Output;