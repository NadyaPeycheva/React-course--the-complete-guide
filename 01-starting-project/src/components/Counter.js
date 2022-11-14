import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { counterAction } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementtHandler = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  const increasetHandler = () => {
    dispatch(counterAction.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : ""}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Incremen</button>
      <button onClick={decrementtHandler}>Decrement</button>
      <button onClick={increasetHandler}>Increase</button>
    </main>
  );
};

export default Counter;
