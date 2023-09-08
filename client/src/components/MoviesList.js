import React from "react";
import MovieCard from "../components/MovieCard";
function MoviesList({ movies }) {
  return (
    <div className="row">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="col-md-4">
            <MovieCard movie={movie}></MovieCard>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesList;
