import './App.css';
import 'normalize.css'

import React, {useEffect} from 'react';
import {useAppDispatch, setCurrencyData} from "./store/store.ts";
import {Valute} from "./store/types.ts";
import InputForm from "./components/InputForm/InputForm.tsx";

const App: React.FC = () => {

  const dispatch = useAppDispatch();

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
      dispatch(setCurrencyData(data));
      })
  }, []);

  return (
    <main className="App">
      <div className="background">
        <InputForm></InputForm>
      </div>
      <div className="circle"></div>
    </main>
  );
};

export default App;
