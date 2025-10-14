
import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "50px",
           borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          width: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>

  );
}

export default App;