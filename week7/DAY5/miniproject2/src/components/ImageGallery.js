import React, { useEffect, useState } from "react";
import { pexelsApi } from "../api";
export default function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const fetchImages = async () => {
    try {
      const res = await pexelsApi.get(`search?query=${query}&per_page=30&page=${page}`);
      setImages(res.data.photos);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query, page]);

  return (
    <div className="gallery">
      <h2>{query.toUpperCase()} Pictures</h2>
      <div className="images-grid">
        {images.map((img) => (
          <div className="image-card" key={img.id}>
            <img src={img.src.medium} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Bonus: pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
