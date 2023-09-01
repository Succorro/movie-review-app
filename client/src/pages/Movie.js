import React from "react";

function Movie({ movie }) {
  return (
    <div>
      Individual Movie
      <h1>{movie.title}</h1>
    </div>
  );
}

export default Movie;
