import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function WeatherCard({ city, temp, desc, onFavorite }) {
  return (
    <Card sx={{ width: 300, margin: "1rem auto", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5">{city}</Typography>
        <Typography variant="h6">{temp}°C</Typography>
        <Typography variant="body2">{desc}</Typography>
        <Button
          sx={{ marginTop: 1 }}
          variant="contained"
          color="primary"
          onClick={onFavorite}
        >
          Add to Favorites
        </Button>
      </CardContent>
    </Card>
  );
}
