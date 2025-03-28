import React from 'react';
import {setInputFrom, setInputTo, useAppDispatch, useAppSelector} from "../../store/store.ts";
import {converter} from "../../functions.ts";
import './Input.scss'

const Input: React.FC = () => {

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => state.reducerCountry);

  const stateInput = useAppSelector(state => state.reducerInput.inputFrom);
  const dispatch = useAppDispatch();

  if (!charCodes) {return (<div>Loading...</div>)}

  return (
    <input inputMode={'numeric'} maxLength={13} value={stateInput ?? ''} className="input-form__input input-form__input--margin" type="text" onChange={(e) => {
      dispatch(setInputFrom(parseFloat(e.target.value) || null));
      dispatch(setInputTo(converter(charCodes, country.countryTo, country.countryFrom, parseFloat(e.target.value) || 0)))
    }}></input>
  )
}

export default Input