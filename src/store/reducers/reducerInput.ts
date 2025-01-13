import {IDataInput, IActionInput} from "../types.ts";
import {ActionsInput} from "../actions.ts";

const initialState: IDataInput = {
  inputFrom: null,
  inputTo: null
}

function reducerInput(state: IDataInput = initialState, action: IActionInput): IDataInput {
  switch (action.type) {
    case ActionsInput.SET_INPUTTO:
      return {...state, inputTo: action.payload};
    case ActionsInput.SET_INPUTFROM:
      return {...state, inputFrom: action.payload};
    default:
      return state;
  }
}

export default reducerInput;