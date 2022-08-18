import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";

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
      <div className="row">
        <div className="col-6">
          <h4>Pending Tasks (10)</h4>
          <hr />
          <TodoList todos={todos} />
        </div>
        <div className="col-6">
          <h4>Add ToDo</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Write your task"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Add task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
