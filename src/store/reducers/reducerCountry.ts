import {IActionCountry, ICountry} from "../types.ts";
import {ActionsCountry} from "../actions.ts";

const initialState: ICountry = {
  countryTo: '',
  countryFrom: ''
}

const reducerCountry = (state: ICountry = initialState, action: IActionCountry): ICountry => {
  switch (action.type) {
    case ActionsCountry.SET_COUNTRYFROM:
      return {...state, countryFrom: action.payload};
    case ActionsCountry.SET_COUNTRYTO:
      return {...state, countryTo: action.payload};
    default:
      return state;
  }
}

export default reducerCountry;