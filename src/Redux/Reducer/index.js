import { combineReducers } from "redux";
import magpieState from "./MagpieReducer";

const rootReducer = combineReducers({ magpieState });

export default rootReducer;
