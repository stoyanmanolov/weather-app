import axios from "axios";
import { FETCH_WEATHER, SET_DAY } from "./types";
import { filterData } from "./helper";

export const fetchWeather = city => {
  return async dispatch => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then(promise =>
        dispatch({ type: FETCH_WEATHER, payload: filterData(promise.data) })
      )
      .catch(error => window.alert(error));
  };
};

export const setDay = weatherDay => {
  return {
    type: SET_DAY,
    payload: weatherDay
  };
};
