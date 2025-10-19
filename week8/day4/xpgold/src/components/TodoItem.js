import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li style={{ margin: "0.5rem 0" }}>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: "1rem" }}>
        Remove
      </button>
    </li>
  );
}
