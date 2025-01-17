import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducerData from "./reducers/reducerData.ts";
import reducerInput from "./reducers/reducerInput.ts";
import {useDispatch, useSelector} from "react-redux";
import {IActionCountry, IActionCurrencyData, IActionInput, Valute} from "./types.ts";
import {ActionsCountry, ActionsData, ActionsInput} from "./actions.ts";
import reducerCountry from "./reducers/reducerCountry.ts";

const rootReducer = combineReducers({
    reducerCurrency: reducerData,
    reducerInput: reducerInput,
    reducerCountry: reducerCountry
})

export const store  = configureStore({
  reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const setInputTo = (payload: number | null): IActionInput => ({type: ActionsInput.SET_INPUTTO,  payload: payload});
export const setInputFrom = (payload: number | null): IActionInput => ({type: ActionsInput.SET_INPUTFROM,  payload: payload});
export const setCurrencyData = (payload: Valute): IActionCurrencyData => ({type: ActionsData.SET_CURRENCY, payload: payload});
export const setCountryTo = (payload: string): IActionCountry => ({type: ActionsCountry.SET_COUNTRYTO, payload: payload});
export const setCountryFrom = (payload: string): IActionCountry => ({type: ActionsCountry.SET_COUNTRYFROM, payload: payload});
