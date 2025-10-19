import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API endpoint (you can use jsonplaceholder)
const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

// Thunk to fetch todos asynchronously
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.map(todo => ({ id: todo.id, text: todo.title, completed: todo.completed }));
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch todos";
      });
  }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
