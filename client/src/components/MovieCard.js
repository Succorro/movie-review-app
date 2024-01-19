import React from "react";
import { useHistory } from "react-router-dom";

function MovieCard({ movie }) {
  const history = useHistory();
  function movieClick(id) {
    history.push(`/movies/${id}`);
  }
  const { id, title, genre } = movie;

  return (
    <div
      className="card text-bg-light m-2"
      key={id}
      onClick={() => movieClick(id)}
    >
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{genre} film</p>
      </div>
    </div>
  );
}

export default MovieCard;
