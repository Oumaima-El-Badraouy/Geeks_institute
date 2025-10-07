import { useState } from "react";
import Ex1 from "./ex1.jsx";
import Context from "./Context.js";
function App() {
  const [Mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const toggleMode = () => {
    setMode(prevMode => ({
      backgroundColor: prevMode.backgroundColor === "white" ? "black" : "white",
      color: prevMode.color === "black" ? "white" : "black"
    }));
  };
  return (
    <Context.Provider value={{ Mode, setMode }}>
      <button onClick={toggleMode} style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Toggle {Mode.backgroundColor === "white" ? "Dark" : "Light"} Mode
      </button>
      <Ex1 />
    </Context.Provider>
  );
}

export default App;