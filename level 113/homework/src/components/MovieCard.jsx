import { useState } from "react";

export default function MovieCard({ title, image, description, rating, genre, releaseDate }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>

      {showMore && (
        <div>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Genre:</strong> {genre}</p>
          <p><strong>Release Date:</strong> {releaseDate}</p>
        </div>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Less Info" : "More Info"}
      </button>
    </div>
  );
}
