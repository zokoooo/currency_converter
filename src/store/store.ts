import { createStore } from "redux";

enum actionTypes {
    SET_INPUTTO = "SET_INPUTTO",
    SET_INPUTFROM = "SET_INPUTTO",
    SET_DATACONVERTER = "SET_DATACONVERTER"
}

interface IStore {
    inputFrom: number;
    inputTo: number;
    dataConverter: object;
}

const initialState: IStore = {
    inputFrom: 0,
    inputTo: 0,
    dataConverter: {}
}

const reducer = (state: IStore = initialState, action: object): IStore => {
    switch (action.type) {
        case actionTypes.SET_INPUTTO:
            return {...state, inputTo: action.payload}
        case actionTypes.SET_INPUTFROM:
            return {...state, inputFrom: action.payload}
        case actionTypes.SET_DATACONVERTER:
            return {...state, dataConverter: action.payload}
        default:
            return state;
    }
}

export const store: IStore = createStore(reducer);

export const setInputTo = (payload: number | object) => ({type: actionTypes.SET_INPUTTO, payload: payload})
export const setInputFrom = (payload: number | object) => ({type: actionTypes.SET_INPUTFROM, payload: payload})
export const setDataConverter = (payload: number | object) => ({type: actionTypes.SET_DATACONVERTER, payload: payload})