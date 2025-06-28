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
          <p><b>Rating:</b> {rating}</p>
          <p><b>Genre:</b> {genre}</p>
          <p><b>Release Date:</b> {releaseDate}</p>
        </div>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Less Info" : "More Info"}
      </button>
    </div>
  );
}
