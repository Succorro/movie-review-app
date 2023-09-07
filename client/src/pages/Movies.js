import React from "react";
import MoviesList from "../components/MoviesList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Movies({ movies }) {
  return (
    <div>
      All Movies
      <MoviesList movies={movies} />
      <Link to="/movies/new"> Are we missing a Movie? </Link>
    </div>
  );
}

export default Movies;
