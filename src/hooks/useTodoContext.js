import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error("TodoContext can only be used inside TodoContextProvider");
  }

  return context;
};
