import { Dispatch } from "redux";
import { ActionType } from "../action-type";
import { Actions } from "../actions";

export const incrementCounter =
  (value: number) => (dispatch: Dispatch<Actions>) =>
    dispatch({
      type: ActionType.INCREMENT,
      payload: value,
    });
export const decrementCounter =
  (value: number) => (dispatch: Dispatch<Actions>) =>
    dispatch({
      type: ActionType.DECREMENT,
      payload: value,
    });
export const resetCounter = () => (dispatch: Dispatch<Actions>) =>
  dispatch({
    type: ActionType.RESET,
  });
