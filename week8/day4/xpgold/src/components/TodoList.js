import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
