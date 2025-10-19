export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const addTodo = (category, text) => ({
  type: ADD_TODO,
  payload: { category, text },
});

export const toggleTodo = (category, id) => ({
  type: TOGGLE_TODO,
  payload: { category, id },
});

export const removeTodo = (category, id) => ({
  type: REMOVE_TODO,
  payload: { category, id },
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});
