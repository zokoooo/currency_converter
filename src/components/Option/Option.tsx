import React from 'react';
import ReactCountryFlag from "react-country-flag";
import './Option.scss';

interface OptionProps {
  name: string;
  charCode: string;
}

const Option: React.FC<OptionProps> = ({ name, charCode }) => {
  return (
    <div className="option" data-charcode={charCode}>
      <ReactCountryFlag className="option__flag" countryCode={charCode.slice(0, 2)} svg={true} data-charcode={charCode}/>
      <p className="option__text" data-charcode={charCode}>{name}</p>
    </div>
  );
}

export default Option;
