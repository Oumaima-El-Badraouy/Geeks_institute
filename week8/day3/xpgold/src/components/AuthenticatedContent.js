import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

export default function AuthenticatedContent() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <LogoutButton />
    </div>
  );
}
