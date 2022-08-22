import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { dispatch } = useTodoContext();
  const [error, setError] = useState("");
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      return setError("please add a todo before submitting");
    }
    const id = uuidv4();
    dispatch({ type: "ADD_TODO", payload: { completed: false, todo, id } });
    const items = JSON.parse(localStorage.getItem("todos"));
    if (!items) {
      return localStorage.setItem(
        "todos",
        JSON.stringify([{ completed: false, todo, id }])
      );
    } else {
      localStorage.setItem(
        "todos",
        JSON.stringify([{ completed: false, todo, id }, ...items])
      );
    }
    setTodo("");
    setError("");
  };
  return (
    <>
      {" "}
      <h3>enter todo</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="string"
          name="todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button>submit</button>
      </form>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Form;
