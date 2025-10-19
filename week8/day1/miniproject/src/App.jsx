import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import FavoritesPage from "./pages/FavoritesPage";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Weather
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favorites
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}
