import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

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

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h4>Pending Tasks (10)</h4>
          <hr />
          <TodoList todos={todos} />
        </div>
        <div className="col-6">
          <h4>Add ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
