import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Task1",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Task1",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item2</li>
      </ul>
    </>
  );
};
