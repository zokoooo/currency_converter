import React, {useState} from 'react';
import './Select.css';
import ReactCountryFlag from "react-country-flag";
import {useAppSelector} from "../../store/store.ts";

const Select: React.FC = () => {

  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const charCodes = useAppSelector(state => state.reducerCurrency.valute);
  // const country = useAppSelector(state => state.reducerCountry);

  if (!charCodes) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='select'>
      <div className="currentSelect" onClick={() => {setSelectOpen(!selectOpen)}} style={selectOpen ? {borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"} : {borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}></div>

      <div className="selectList" style={selectOpen ? {display: 'block'} : {display: 'None'}}>
        {Object.keys(charCodes).filter((item) => item !== 'XDR').map((item, index) => (
          <div className="option" data-name={charCodes[item].name}>
            <ReactCountryFlag key={index} countryCode={item.slice(0, 2)} svg={true} />
            <p className="textOption">{charCodes[item].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
