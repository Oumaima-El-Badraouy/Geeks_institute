import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  visibilityFilter: "All" // 'All', 'Active', 'Completed'
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: Date.now(), text: action.payload, completed: false };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    }
  }
});

export const { addTodo, toggleTodo, removeTodo, setVisibilityFilter } = todoSlice.actions;
export default todoSlice.reducer;
