import React from "react";
import MoviesList from "../components/MoviesList";
function Movies({ movies }) {
  return (
    <div>
      All Movies
      <MoviesList movies={movies} />
    </div>
  );
}

export default Movies;
