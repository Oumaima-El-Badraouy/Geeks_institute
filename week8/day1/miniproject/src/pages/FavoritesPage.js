import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleRemove = (city) => {
    const updated = favorites.filter((fav) => fav !== city);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>⭐ Favorite Cities</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((city) => (
          <Card
            key={city}
            sx={{
              width: 300,
              margin: "1rem auto",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <CardContent>
              <Typography variant="h6">{city}</Typography>
              <Button
                color="error"
                variant="contained"
                onClick={() => handleRemove(city)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
