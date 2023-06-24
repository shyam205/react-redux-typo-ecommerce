import { combineReducers } from "redux";
import productreducer from "./allproductsreducers";
import cartreducer from "./cartreducers";

export const reducers = combineReducers({
    productreducer,
    cartreducer
})