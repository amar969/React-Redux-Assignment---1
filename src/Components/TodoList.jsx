import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../Redux/action.js";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  

  console.log("Todo List", todos);

  return (
    <div  >
      {todos.map((item) => {
        return (
            <div key={item.id}>
              <p>
                {" "}
                <Link to={`/TodoItem/${item.id}`} >{item.title}</Link> {" -->  "}{" "}
                {item.status ? "Completed" : "Not Completed"}{" "}
              </p>
              <button onClick={() => dispatch(toggleTodo(item.id))}>
                {" "}
                Toggle Todo{" "}
              </button>
              <button onClick={() => dispatch(deleteTodo(item.id))}>
                {" "}
                Delete Todo{" "}
              </button>
            </div>
        );
      })}
    </div>
  );
};
