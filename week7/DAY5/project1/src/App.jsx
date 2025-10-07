import React, { useState } from "react";
import quotes from "./quotes";
export default function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[randomIndex]);
  const [color, setColor] = useState(randomColor());
  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
    return color;
  }
  const generateQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === quote.text);

    setQuote(newQuote);
    setColor(randomColor());
  };
  const styles = {
    backgroundColor: color,
    minHeight: "100vh",
    color: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease",
  };
  const boxStyle = {
    background: "#fff",
    borderRadius: "15px",
    padding: "40px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  };
  const buttonStyle = {
    backgroundColor: color,
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
  };
  return (
    <div style={styles}>
      <div style={boxStyle}>
        <h2 style={{ color: color }}>"{quote.text}"</h2>
        <p>— {quote.author}</p>
        <button style={buttonStyle} onClick={generateQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}
