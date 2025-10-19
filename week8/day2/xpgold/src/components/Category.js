import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../redux/actions";

function Category({ category, todos, addTodo, toggleTodo, removeTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(category, text);
    setText("");
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>{category}</h2>
      <input
        type="text"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(category, todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(category, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapDispatchToProps = { addTodo, toggleTodo, removeTodo };

export default connect(null, mapDispatchToProps)(Category);
