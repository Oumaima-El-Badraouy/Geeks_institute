import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogin = () => {
    if (!username) return alert("Enter username");
    dispatch(login({ username }));
    setUsername("");
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <input 
            type="text" 
            placeholder="Enter username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
