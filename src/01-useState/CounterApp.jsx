import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 5,
    counter3: 10,
  });

  const plus = () => {
    setCounter({
      ...counter,
      counter1: counter.counter1 + 1,
    });
  };

  const minor = () => {
    setCounter({
      ...counter,
      counter1: counter.counter1 - 1,
    });
  };

  return (
    <div>
      <h1>Counter1: {counter.counter1}</h1>
      <h1>Counter2: {counter.counter2}</h1>
      <h1>Counter3: {counter.counter3}</h1>
      <hr />
      <button className="btn" onClick={plus}>
        +1
      </button>
      <button className="btn" onClick={minor}>
        -1
      </button>
    </div>
  );
};
