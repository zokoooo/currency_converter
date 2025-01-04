import {ICurrencyData, IActionCurrencyData} from "../types.ts";
import {ActionsData} from "../actions.ts";

const initalState: ICurrencyData = {
  valute: null
}

function reducerData(state: ICurrencyData = initalState, action: IActionCurrencyData): ICurrencyData {
  switch (action.type) {
    case ActionsData.SET_CURRENCY:
      return {...state, valute: action.payload};
    default:
      return state;
  }
}

export default reducerData;