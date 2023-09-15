import React from "react";
import { useHistory } from "react-router-dom";

function TitleCard({ movies }) {
  const history = useHistory();
  function titleClick(id) {
    history.push(`/movies/${id}`);
  }
  const titles = movies.map((movie) => (
    <div
      key={movie.id}
      className="col-md-5 card border-primary m-1 p-1"
      onClick={() => titleClick(movie.id)}
    >
      {movie.title}
    </div>
  ));

  return <div className="row ">{titles}</div>;
}

export default TitleCard;
