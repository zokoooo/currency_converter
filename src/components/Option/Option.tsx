import React from 'react';
import ReactCountryFlag from "react-country-flag";
import './Option.css';

interface OptionProps {
  key: number;
  name: string;
  charCode: string;
}

const Option: React.FC<OptionProps> = ({ key, name, charCode }) => {
  return (
    <div className="option" key={key} data-charCode={charCode}>
      <ReactCountryFlag className="flag" countryCode={charCode.slice(0, 2)} svg={true} data-charCode={charCode}/>
      <p className="textOption" data-charCode={charCode}>{name}</p>
    </div>
  );
}

export default Option;
