import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";

export default function Counter() {
  const [amount, setAmount] = React.useState(0);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { incrementCounter, decrementCounter, resetCounter } = {
    ...actionCreators,
  };

  // const { incrementCounter, decrementCounter, resetCounter } =
  //   bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>{counter}</h1>

      <label htmlFor="count">increment/decrement by : </label>
      <input
        type="number"
        name=""
        id="count"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="button" onClick={() => dispatch(incrementCounter(amount))}>
        + {amount}
      </button>
      <button type="button" onClick={() => dispatch(resetCounter())}>
        reset
      </button>
      <button type="button" onClick={() => dispatch(decrementCounter(amount))}>
        - {amount}
      </button>
    </div>
  );
}
