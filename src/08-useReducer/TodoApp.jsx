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
      <div className="row">
        <div className="col-6">
          <h4>Pending Tasks (10)</h4>
          <hr />
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger ml-2">Delete</button>
            </li>
          </ul>
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
