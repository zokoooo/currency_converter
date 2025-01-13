import React, {useState} from 'react';
import './Select.css';
import ReactCountryFlag from "react-country-flag";
import {useAppSelector, useAppDispatch, setCountryTo, setCountryFrom} from "../../store/store.ts";
import { IoIosArrowDown } from "react-icons/io";
import OptionList from "../OptionList/OptionList.tsx";

interface SelectProps {
  type?: "from" | "to";
}

const Select: React.FC<SelectProps> = ({ type }) => {

  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const setCountry = type == "from" ? setCountryFrom : setCountryTo;

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => type == 'from' ? state.reducerCountry.countryFrom : state.reducerCountry.countryTo);

  if (!charCodes) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='select'>

      <div className="currentSelect" onClick={() => {setSelectOpen(!selectOpen)}} style={selectOpen ? {borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"} : {borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
        <ReactCountryFlag className="flag" countryCode={country.slice(0, 2)} svg={true} />
          {charCodes[country].name}
        <IoIosArrowDown className={selectOpen ? "arrowDown" : "arrowUp"}/>
      </div>

      <OptionList charCodes={charCodes} selectOpen={selectOpen} onClick={(e) => {
        dispatch(setCountry(e.target.getAttribute('data-charcode')));
        setSelectOpen(!selectOpen);}}/>
    </div>
  );
};

export default Select;
