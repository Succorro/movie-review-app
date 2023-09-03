import React from "react";
import { useHistory } from "react-router-dom";

function MovieCard({ movie }) {
  const history = useHistory();
  function movieClick(id) {
    history.push(`/movies/${id}`);
  }
  const { id, title, release_year, genre, director } = movie;
  return (
    <div class="card text-bg-light m-2" key={id} onClick={() => movieClick(id)}>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">Release Date: {release_year}</p>
        <p class="card-text">{genre} film</p>
        <p class="card-text">{director} film</p>
      </div>
    </div>
  );
}

export default MovieCard;
