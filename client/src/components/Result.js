import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Result({ movies, setter }) {
  return (
    <div
      className="list-group position-absolute "
      style={{ width: "203px", zIndex: 100 }}
    >
      {movies.map((movie) => {
        const { id, title } = movie;

        return (
          <Link
            className="list-group-item list-group-item-light"
            onClick={() => setter("")}
            to={`/movies/${id}`}
            key={id}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}

export default Result;
