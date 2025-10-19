import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>📸 Snap Shot</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<CategoryPage category="mountain" />} />
          <Route path="/mountain" element={<CategoryPage category="mountain" />} />
          <Route path="/beaches" element={<CategoryPage category="beach" />} />
          <Route path="/birds" element={<CategoryPage category="bird" />} />
          <Route path="/food" element={<CategoryPage category="food" />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
