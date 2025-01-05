import {ICurrencyData, IActionCurrencyData} from "../types.ts";
import {ActionsData} from "../actions.ts";

const initialState: ICurrencyData = {
  valute: null
}

function reducerData(state: ICurrencyData = initialState, action: IActionCurrencyData): ICurrencyData {
  switch (action.type) {
    case ActionsData.SET_CURRENCY:
      return {...state, valute: action.payload};
    default:
      return state;
  }
}

export default reducerData;