import React from "react";
import MovieCard from "../components/MovieCard";
function MoviesList({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="col">
            <MovieCard movie={movie}></MovieCard>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesList;
