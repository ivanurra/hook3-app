import { useMemo } from "react";
import { useCounter } from "../hooks";

const hardStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("-------->");
  }
  return `${iterationNumber} iterations done!`;
};

export const MemoHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const memorizedValue = useMemo(() => hardStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </>
  );
};
