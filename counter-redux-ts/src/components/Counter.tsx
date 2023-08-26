import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

const Counter = () => {
  const counterState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const [count, setCount] = React.useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setCount(parseInt(e.target.value));

  const { incrementCounter, decrementCounter, resetCounter } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container">
      <label>INCREMENT/DECREMENT COUNTER &nbsp;</label>
      <input
        type="number"
        name=""
        id=""
        min={0}
        max={100}
        onChange={handleChange}
      />
      <h1>{counterState}</h1>
      <button onClick={() => decrementCounter(count)}>-</button>
      <button onClick={resetCounter} className="reset-btn">
        reset
      </button>
      <button onClick={() => incrementCounter(count)}>+</button>
    </div>
  );
};
export default Counter;
