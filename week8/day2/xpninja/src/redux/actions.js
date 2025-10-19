export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTH_ERROR = "AUTH_ERROR";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_CATEGORY = "ADD_CATEGORY";

// Auth action creators
export const registerUser = (user) => ({
  type: REGISTER,
  payload: user,
});

export const loginUser = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const authError = (error) => ({
  type: AUTH_ERROR,
});
