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
  inputFrom: number;
  inputTo: number;
}

export interface IActionCurrencyData {
  type: string;
  payload: Valute;
}

export interface IActionInput {
  type: string;
  payload: number;
}