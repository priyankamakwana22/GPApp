import { combineReducers } from "redux";
import storeReducer from "./reducer";
// import { Reducer } from "redux";

export default combineReducers({
    store:storeReducer
})

