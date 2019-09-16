import { FETCH_WEATHER, SET_DAY } from "../actions/types";

export const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const dayReducer = (state = "0", action) => {
  switch (action.type) {
    case SET_DAY:
      return (state = action.payload);
    default:
      return state;
  }
};
