import React from "react";
import MovieCard from "../components/MovieCard";
function MoviesList({ movies, handleMovieClick }) {
  return (
    <div>
      Movies List
      {movies.map((movie) => {
        return (
          <MovieCard
            movie={movie}
            handleMovieClick={handleMovieClick}
          ></MovieCard>
        );
      })}
    </div>
  );
}

export default MoviesList;
