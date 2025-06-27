import MovieCard from "./components/MovieCard";
import movies from "./components/movies";

export default function App() {
  return (
    <div>
      <h1>Movie Card Gallery</h1>

      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
