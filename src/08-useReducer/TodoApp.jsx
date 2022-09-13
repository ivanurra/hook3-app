import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo();

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h4>Tasks: {todosCount}</h4> <span></span>
          <h4>Pending Tasks: {pendingTodosCount}</h4>
          <hr />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-6">
          <h4>Add</h4>
          <h4>Task Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
