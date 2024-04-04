import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/CounterSlice";

const Counter = () => {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
    return (
    <div>
      <h1 style={{ textAlign: "center" }}>A Simple Counter</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <button onClick={()=>dispatch(increment())}> Increment </button>
        <p style={{
            textAlign: "center"
        }}> {value} </p>
        <button onClick={()=>dispatch(decrement())}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
