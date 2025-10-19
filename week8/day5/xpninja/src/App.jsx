import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List with Filters</h1>
        <TodoList />
      </div>
    </Provider>
  );
}
