import React, {useState} from 'react';
import './Select.scss';
import ReactCountryFlag from "react-country-flag";
import {useAppSelector, useAppDispatch, setCountryTo, setCountryFrom, setInputTo} from "../../store/store.ts";
import { IoIosArrowDown } from "react-icons/io";
import OptionList from "../OptionList/OptionList.tsx";
import {converter} from "../../functions.ts";

interface SelectProps {
  type?: "from" | "to";
}

const Select: React.FC<SelectProps> = ({ type }) => {

  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const setCountry = type == "from" ? setCountryFrom : setCountryTo;

  const inputFrom = useAppSelector(state => state.reducerInput.inputFrom)
  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => type == 'from' ? state.reducerCountry.countryFrom : state.reducerCountry.countryTo);
  const countries = useAppSelector(state => state.reducerCountry);

  if (!charCodes) {
    return <div className="loading">Loading...</div>;
  }

  const handleOptionClick = (e) => {
    const charCode = e.target.getAttribute('data-charcode');
    if (charCode) {
      dispatch(setCountry(charCode));
      setSelectOpen(false);
      const newInputTo = converter(
        charCodes,
        type === 'from' ? countries.countryTo : charCode,
        type === 'from' ? charCode : countries.countryFrom,
        inputFrom ?? 0
      );
      dispatch(setInputTo(newInputTo));
    }
  };

  return (
    <div className='select'>

      <div className="select__current" onClick={() => {setSelectOpen(!selectOpen)}} style={selectOpen ? {borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"} : {borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
        <ReactCountryFlag className="select__current-flag" countryCode={country.slice(0, 2)} svg={true} style={{width: '1.5em'}}/>
        {charCodes[country].name}
        <IoIosArrowDown className={selectOpen ? "arrowDown" : "arrowUp"}/>
      </div>

      <OptionList charCodes={charCodes} selectOpen={selectOpen} onClick={handleOptionClick}/>
    </div>
  );
};

export default Select;
