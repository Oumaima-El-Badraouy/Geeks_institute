import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logoutUser())}>Logout</button>;
}
