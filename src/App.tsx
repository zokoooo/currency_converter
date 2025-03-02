import './assets/fonts/stylesheet.css'
import './App.scss';
import 'normalize.css'

import React, {useEffect} from 'react';
import {useAppDispatch, setCurrencyData, useAppSelector, setCountryTo, setCountryFrom} from "./store/store.ts";
import {Valute} from "./store/types.ts";
import InputForm from "./components/InputForm/InputForm.tsx";
import Output from "./components/Output/Output.tsx"
import { IoIosSwap } from "react-icons/io";

const App: React.FC = () => {

  const dispatch = useAppDispatch();

  const countries = useAppSelector(state => state.reducerCountry);

  useEffect(() => {
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(res => res.json())
      .then(res => {
        const data: Valute = {};
        Object.values(res.Valute).forEach((element: any) => {
          data[element.CharCode] = {
            charCode: element.CharCode,
            nominal: element.Nominal,
            value: element.Value,
            name: element.Name,
          };
        });

      data['RUB'] = {
        charCode: 'RUB',
        nominal: 1,
        value: 1,
        name: 'Российский рубль'
      }
      dispatch(setCurrencyData(data));
      })
  }, []);

  return (
    <main className="App">
      <div className="header">
        CURRENCY CONVERTER
      </div>

      <div className="background">
        <InputForm></InputForm>
        <IoIosSwap size={50} onClick={() => {
          dispatch(setCountryTo(countries.countryFrom));
          dispatch(setCountryFrom(countries.countryTo))
        }} style={{cursor: "pointer"}}></IoIosSwap>
        <Output />
      </div>
      <div className="circle"></div>
    </main>
  );
};

export default App;
