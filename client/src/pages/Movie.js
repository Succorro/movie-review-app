import React, { useState } from "react";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Movie({
  movies,
  userId,
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
    <div>
      Individual Movie
      <h1>{title}</h1>
      <h4 class="card-text">Release Date:</h4>
      <p>{release_year}</p>
      <h4 class="card-text">Genre:</h4>
      <p>{genre} film</p>
      <h4 class="card-text">Director:</h4>
      <p>{director}</p>
      <h4 class="card-text">Plot:</h4>
      <p>{description}</p>
      <div>
        <ReviewList
          reviews={reviews}
          onDeleteReview={onDeleteReview}
          userId={userId}
          movieId={movie.id}
          onUpdateReview={onUpdateReview}
        />
        {showForm ? (
          <ReviewForm
            setShowForm={setShowForm}
            userId={userId}
            movieId={movie.id}
            onCreateReview={onCreateReview}
          />
        ) : (
          <button onClick={() => setShowForm(true)}>Leave a Review</button>
        )}
      </div>
    </div>
  );
}

export default Movie;
