import { useEffect } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import { Todo } from "./Todo";

const Todos = () => {
  const { todos, dispatch } = useTodoContext();
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
      return dispatch({ type: "SET_TODOS", payload: [] });
    }
    dispatch({ type: "SET_TODOS", payload: todos });
  }, [dispatch]);

  return (
    <div className="todos">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default Todos;
