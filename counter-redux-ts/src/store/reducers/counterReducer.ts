import { Actions } from "../actions";
import { ActionType } from "../action-type";

const initialeState: number = 0;

const counterReducer = (state = initialeState, action: Actions) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + action.payload;
    case ActionType.DECREMENT:
      return state - action.payload;
    case ActionType.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
