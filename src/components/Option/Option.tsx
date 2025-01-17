import React from 'react';
import ReactCountryFlag from "react-country-flag";
import './Option.css';

interface OptionProps {
  name: string;
  charCode: string;
}

const Option: React.FC<OptionProps> = ({ name, charCode }) => {
  return (
    <div className="option" data-charcode={charCode}>
      <ReactCountryFlag className="flag" countryCode={charCode.slice(0, 2)} svg={true} data-charcode={charCode}/>
      <p className="textOption" data-charcode={charCode}>{name}</p>
    </div>
  );
}

export default Option;
