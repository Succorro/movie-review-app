import React from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function MoviesList({ movies }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="col">
              <MovieCard movie={movie}></MovieCard>
            </div>
          );
        })}
      </div>
      <Link to="/movies/new"> Are we missing a Movie? </Link>
    </>
  );
}

export default MoviesList;
