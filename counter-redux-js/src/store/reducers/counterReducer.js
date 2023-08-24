import { INCREMENT, DECREMENT, RESET } from "../actions/types";

const initialeState = 0;

const counterReducer = (state = initialeState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RESET:
      return initialeState;
    default:
      return state;
  }
};

export default counterReducer;
