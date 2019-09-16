import { combineReducers } from "redux";
import { weatherReducer, dayReducer } from "./weather";

export default combineReducers({
  weather: weatherReducer,
  day: dayReducer
});
