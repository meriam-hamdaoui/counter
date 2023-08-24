import { INCREMENT, DECREMENT, RESET } from "./types";
export const incrementCounter = (number) => (dispatch) =>
  dispatch({ type: INCREMENT, payload: +number });
export const decrementCounter = (number) => (dispatch) =>
  dispatch({ type: DECREMENT, payload: number });
export const resetCounter = () => (dispatch) => dispatch({ type: RESET });
