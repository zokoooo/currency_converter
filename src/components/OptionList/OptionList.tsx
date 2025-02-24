import React from 'react';
import Option from "../Option/Option.tsx";
import {Valute} from "../../store/types.ts";
import "./OptionList.scss"

interface SelectListProps {
  charCodes: Valute;
  selectOpen: boolean;
  onClick: (e: any) => void;
}

const OptionList: React.FC<SelectListProps> = ( { charCodes, selectOpen, ...rest }) => {

  return (
    <div className="option-list" data-open={selectOpen} {...rest}>
      {Object.keys(charCodes).filter((item) => item !== 'XDR').map((item, index) => (
        <Option key={index} charCode={item} name={charCodes[item].name}/>
      ))}
    </div>
  )
}

export default OptionList;