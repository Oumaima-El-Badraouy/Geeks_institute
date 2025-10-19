import React from "react";
import ImageGallery from "../components/ImageGallery";
export default function CategoryPage({ category }) {
  return <ImageGallery query={category} />;
}
