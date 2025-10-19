import { REGISTER, LOGIN, LOGOUT, AUTH_ERROR } from "./actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      // In real scenario, API call would happen
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload, isAuthenticated: true, error: null };

    case LOGIN:
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.username === action.payload.username &&
        storedUser.password === action.payload.password
      ) {
        return { ...state, isAuthenticated: true, user: storedUser, error: null };
      } else {
        return { ...state, error: "Invalid username or password" };
      }

    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: null };

    case AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
