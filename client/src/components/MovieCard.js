import React from "react";
import { useHistory } from "react-router-dom";

function MovieCard({ movie, handleMovieClick }) {
  const history = useHistory();
  function movieClick(id) {
    handleMovieClick(id);
    history.push(`/movies/${id}`);
  }
  const { id, title, release_year, genre, director, description } = movie;
  return (
    <div key={id} onClick={() => movieClick(id)}>
      {title}{" "}
    </div>
  );
}

export default MovieCard;
