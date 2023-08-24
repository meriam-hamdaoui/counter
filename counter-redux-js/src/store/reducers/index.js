import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// reducer combiner when we have more then one reducer

const reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;
