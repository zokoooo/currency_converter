import React, {useState} from 'react';
import './Select.scss';
import ReactCountryFlag from "react-country-flag";
import {useAppSelector, useAppDispatch, setCountryTo, setCountryFrom} from "../../store/store.ts";
import { IoIosArrowDown } from "react-icons/io";
import OptionList from "../OptionList/OptionList.tsx";

interface SelectProps {
  type?: "from" | "to";
}

const Select: React.FC<SelectProps> = ({ type }) => {

  const [selectOpen, setSelectOpen] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const setCountry = type == "from" ? setCountryFrom : setCountryTo;

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  const country = useAppSelector(state => type == 'from' ? state.reducerCountry.countryFrom : state.reducerCountry.countryTo);

  if (!charCodes) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='select'>

      <div className="select__current" onClick={() => {setSelectOpen(!selectOpen)}} style={selectOpen ? {borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"} : {borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
        <ReactCountryFlag className="select__current-flag" countryCode={country.slice(0, 2)} svg={true} style={{width: '1.5em'}}/>
        {charCodes[country].name}
        <IoIosArrowDown className={selectOpen ? "arrowDown" : "arrowUp"}/>
      </div>

      <OptionList charCodes={charCodes} selectOpen={selectOpen} onClick={(e) => {
        if (e.target.getAttribute('data-charcode')) {
          dispatch(setCountry(e.target.getAttribute('data-charcode')));
          setSelectOpen(!selectOpen);
        }}}/>
    </div>
  );
};

export default Select;
