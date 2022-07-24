import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter } = useCounter();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button className="btn btn-primary">+1</button>
      <button className="btn btn-dark">Reset</button>
      <button className="btn btn-primary">-1</button>
    </>
  );
};
