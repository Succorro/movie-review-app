import React from "react";
import MoviesList from "../components/MoviesList";
function Movies({ movies, handleMovieClick }) {
  return (
    <div>
      All Movies
      <MoviesList
        movies={movies}
        handleMovieClick={handleMovieClick}
      ></MoviesList>
    </div>
  );
}

export default Movies;
