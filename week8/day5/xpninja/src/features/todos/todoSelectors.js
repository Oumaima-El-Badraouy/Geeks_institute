import { createSelector } from "@reduxjs/toolkit";

export const selectVisibilityFilter = state => state.todos.visibilityFilter;
export const selectAllTodos = state => state.todos.todos;

export const selectTodos = createSelector(
  [selectAllTodos, selectVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case "Active":
        return todos.filter(todo => !todo.completed);
      case "Completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);

export const selectFilteredTodosCount = createSelector(
  [selectTodos],
  (todos) => todos.length
);
