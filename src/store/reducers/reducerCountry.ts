import {IActionCountry, ICountry} from "../types.ts";
import {ActionsCountry} from "../actions.ts";

const initialState: ICountry = {
  countryTo: window.localStorage.getItem("countryTo") ?? 'RUB',
  countryFrom: window.localStorage.getItem("countryFrom") ?? 'USD',
};

const reducerCountry = (state: ICountry = initialState, action: IActionCountry): ICountry => {
  switch (action.type) {
    case ActionsCountry.SET_COUNTRYFROM:
      window.localStorage.setItem("countryFrom", action.payload);
      return {...state, countryFrom: action.payload};
    case ActionsCountry.SET_COUNTRYTO:
      window.localStorage.setItem("countryTo", action.payload);
      return {...state, countryTo: action.payload};
    default:
      return state;
  }
}

export default reducerCountry;