import { combineReducers } from "redux";
import { counter } from "./counter/reducer";
import { theme } from "./theme/reducer";
export const rootReducer = combineReducers({
  counter,
  theme,
});
