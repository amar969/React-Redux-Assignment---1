import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleTodo } from "../Redux/action";

export const TodoItem = () => {
  let { id } = useParams();
  console.log("id", id);

  const { todos } = useSelector((state) => state);
    const dispatch = useDispatch()

  console.log("todo Item", todos);

  return (
    <>
      {todos.map((todo) =>
        todo.id === id ? (
          <h4>
            {todo.title} {" -->  "}{" "}
            {todo.status ? "Completed" : "Not Completed"}{" "}
            <button onClick={() => dispatch(toggleTodo(todo.id))} > Toggle Todo </button>
          </h4>
        ) : (
          ""
        )
      )}
    </>
  );
};
