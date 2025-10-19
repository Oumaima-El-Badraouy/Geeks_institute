import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "2rem" }}>
        <h1>📝 Todo List with Thunks</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}
