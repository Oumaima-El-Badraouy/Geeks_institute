import React, { useState } from "react";
import { getWeather } from "../api";
import WeatherCard from "../components/WeatherCard";
import { TextField, Button, Box } from "@mui/material";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleSearch = async () => {
    try {
      const data = await getWeather(city);
      setWeather({
        name: data.name,
        temp: data.main.temp,
        desc: data.weather[0].description,
      });
    } catch (err) {
      alert("City not found!");
    }
  };

  const handleAddFavorite = () => {
    const updated = [...favorites, weather.name];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    alert(`${weather.name} added to favorites!`);
  };

  return (
    <Box textAlign="center" sx={{ marginTop: 5 }}>
      <h1>🌤️ Weather App</h1>

      <TextField
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>

      {weather && (
        <WeatherCard
          city={weather.name}
          temp={weather.temp}
          desc={weather.desc}
          onFavorite={handleAddFavorite}
        />
      )}
    </Box>
  );
}
