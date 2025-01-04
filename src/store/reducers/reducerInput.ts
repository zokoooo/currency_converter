import {IDataInput, IActionInput} from "../types.ts";
import {ActionsInput} from "../actions.ts";

const initialState: IDataInput = {
  inputFrom: 0,
  inputTo: 0
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