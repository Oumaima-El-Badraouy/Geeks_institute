import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
export default function Search() {
  const { query } = useParams();
  return <ImageGallery query={query} />;
}
