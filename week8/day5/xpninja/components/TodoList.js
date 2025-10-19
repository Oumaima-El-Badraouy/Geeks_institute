import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo, setVisibilityFilter } from "../features/todos/todoSlice";
import { selectTodos, selectVisibilityFilter, selectFilteredTodosCount } from "../features/todos/todoSelectors";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectVisibilityFilter);
  const count = useSelector(selectFilteredTodosCount);

  const [input, setInput] = useState("");

  const handleAddTodo = useCallback(() => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  }, [dispatch, input]);

  const handleToggleTodo = useCallback(
    (id) => dispatch(toggleTodo(id)),
    [dispatch]
  );

  const handleRemoveTodo = useCallback(
    (id) => dispatch(removeTodo(id)),
    [dispatch]
  );

  const handleFilterChange = useCallback(
    (filter) => dispatch(setVisibilityFilter(filter)),
    [dispatch]
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Add todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Active")}>Active</button>
        <button onClick={() => handleFilterChange("Completed")}>Completed</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: "0.5rem" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none", marginLeft: "0.5rem" }}>
              {todo.text}
            </span>
            <button style={{ marginLeft: "1rem" }} onClick={() => handleRemoveTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Filtered Todos Count: {count}</p>
    </div>
  );
}
