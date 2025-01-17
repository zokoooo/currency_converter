type Action = {
  type: string,
}

interface Currency {
  charCode: string;
  nominal: number;
  name: string;
  value: number;
}

export interface Valute {
  [key: string]: Currency;
}

export interface ICurrencyData {
  valute: Valute | null;
}

export interface IDataInput {
  inputFrom: number | null;
  inputTo: number | null;
}

export interface ICountry {
  countryFrom: string;
  countryTo: string;
}

export interface IActionCurrencyData extends Action {
  payload: Valute;
}

export interface IActionInput extends Action {
  payload: number | null;
}
export interface IActionCountry extends Action {
  payload: string;
}