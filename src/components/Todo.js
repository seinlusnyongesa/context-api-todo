import { useTodoContext } from "../hooks/useTodoContext";

export const Todo = ({ todo }) => {
  const { dispatch } = useTodoContext();
  const handleComplete = () => {
    const items = JSON.parse(localStorage.getItem("todos"));
    const newItems = items.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: true };
      }
      return item;
    });

    localStorage.setItem("todos", JSON.stringify(newItems));
    dispatch({ type: "SET_TODOS", payload: newItems });
  };
  const handleDelete = () => {
    const items = JSON.parse(localStorage.getItem("todos"));

    const newItems = items.filter((item) => item.id !== todo.id);

    localStorage.setItem("todos", JSON.stringify(newItems));
    dispatch({ type: "SET_TODOS", payload: newItems });
  };
  return (
    <div className="todo">
      <p>{todo.todo}</p>{" "}
      <div className="todo_action">
        <button onClick={handleComplete} disabled={todo.completed}>
          {todo.completed ? "completed" : "complete"}
        </button>
        <button onClick={handleDelete}>remove</button>
      </div>
    </div>
  );
};
