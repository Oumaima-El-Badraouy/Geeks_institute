// App.jsx
import React, { useState } from "react";
import Ex1 from "./ex1.jsx";
import { Context } from "./Context.js";

export default function App() {
  const [Mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
    name: "Light Mode",
  });

  return (
    <Context.Provider value={{ Mode, setMode }}>
      <div style={{ height: "100vh",width: "1000vh", ...Mode }}>
        <Ex1 />
      </div>
    </Context.Provider>
  );
}
