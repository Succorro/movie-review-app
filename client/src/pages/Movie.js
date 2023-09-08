import React, { useState } from "react";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/forms/ReviewForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Movie({
  movies,

  onCreateReview,
  onDeleteReview,
  onUpdateReview,
}) {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const filterMovie = () => movies.find((movie) => movie.id === movieId);
  const movie = filterMovie();
  if (!movie)
    return (
      <>
        <h1>404 Error </h1>
        <p>Movie Not Found</p>
      </>
    );

  const { title, release_year, genre, director, description, reviews } = movie;

  return (
    <div className="d-grid m-auto">
      <h1 className="my-3">{title}</h1>
      <div className="card-group d-flex">
        <div className="card d-grid p-1 m-3">
          <h4 className="card-text">Release Date:</h4>
          <p>{release_year}</p>
          <h4 className="card-text">Genre:</h4>
          <p>{genre} film</p>
          <h4 className="card-text">Director:</h4>
          <p>{director}</p>
        </div>
        <div className="card d-grid p-1 m-3">
          <h4 className="card-title">Plot:</h4>
          <p className="card-text" style={{ maxWidth: "500px" }}>
            {description}
          </p>
        </div>
      </div>
      <h1>Reviews</h1>
      <ReviewList
        reviews={reviews}
        onDeleteReview={onDeleteReview}
        movieId={movie.id}
        onUpdateReview={onUpdateReview}
      />
      {showForm ? (
        <div className="container d-block mb-5">
          <ReviewForm
            setShowForm={setShowForm}
            movieId={movie.id}
            onCreateReview={onCreateReview}
          />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-warning d-block "
            onClick={() => setShowForm(true)}
          >
            Leave a Review
          </button>
        </div>
      )}
    </div>
  );
}

export default Movie;
