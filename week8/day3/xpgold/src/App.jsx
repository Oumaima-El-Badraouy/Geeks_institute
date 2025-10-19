import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import LoginForm from "./components/LoginForm";
import AuthenticatedContent from "./components/AuthenticatedContent";

function AppContent() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔐 User Authentication Demo</h1>
      {isAuthenticated ? <AuthenticatedContent /> : <LoginForm />}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
