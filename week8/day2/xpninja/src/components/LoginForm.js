import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser, registerUser, logoutUser } from "../redux/actions";

function LoginForm({ auth, loginUser, registerUser, logoutUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginUser({ username, password });
  };

  const handleRegister = () => {
    registerUser({ username, password });
  };

  const handleLogout = () => {
    logoutUser();
  };

  if (auth.isAuthenticated) {
    return (
      <div>
        <h2>Welcome, {auth.user.username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login / Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      {auth.error && <p style={{ color: "red" }}>{auth.error}</p>}
    </div>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = { loginUser, registerUser, logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
