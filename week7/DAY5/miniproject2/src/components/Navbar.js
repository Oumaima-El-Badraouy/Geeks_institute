import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      navigate(`/search/${text}`);
      setText("");
    }
  };

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/mountain">Mountain</Link>
        <Link to="/beaches">Beaches</Link>
        <Link to="/birds">Birds</Link>
        <Link to="/food">Food</Link>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </nav>
  );
}
