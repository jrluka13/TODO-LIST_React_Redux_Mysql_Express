import {combineReducers} from "redux";
import checkReducer from "./redusers/checkReducer";
import todoReducer from "./redusers/todoReducer";

export default combineReducers({appState: checkReducer, todoState: todoReducer});