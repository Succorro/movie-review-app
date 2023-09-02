import React from "react";
import MovieCard from "../components/MovieCard";
function MoviesList({ movies, handleMovieClick }) {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return (
            <div class="col">
              <MovieCard
                movie={movie}
                handleMovieClick={handleMovieClick}
              ></MovieCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesList;
