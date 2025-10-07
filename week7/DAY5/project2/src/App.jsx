// EX1

// import React, { useState } from "react";

// export default function App() {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [result, setResult] = useState(null);
//   const handleAdd = () => {
//     const sum = Number(num1) + Number(num2);
//     setResult(sum);
//   };
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>Simple Adder</h1>

//       <input
//         type="number"
//         placeholder="First number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//       />
//       <br />
//       <br />

//       <input
//         type="number"
//         placeholder="Second number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={handleAdd}>Add Them</button>
//       <br />
//       <br />
//       {result !== null && <h2>Result: {result}</h2>}
//     </div>
//   );
// }



//bonus
import React, { useState } from "react";
export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        res = b !== 0 ? a / b : " Cannot divide by zero!";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Universal Calculator</h1>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>
      <br />
      <br />
      <button onClick={calculate}>Calculate</button>
      <br />
      <br />
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}
