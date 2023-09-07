import React, { useState } from "react";
import Rating from "@mui/material/Rating/Rating";

function ReviewFormUpdate({
  setShowUpdate,
  review,
  rating,
  onUpdateReview,
  movieId,
  id,
}) {
  const [newReview, setReview] = useState(review);
  const [newRating, setRating] = useState(rating);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: newReview,
        rating: newRating,
      }),
    }).then((r) => {
      if (r.ok) {
        setShowUpdate(false);
        r.json().then((review) => onUpdateReview(review, movieId));
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  return (
    <div className="list-group card mt-0  pt-1">
      <form
        className="form mt-0 pt-1 align-self-center"
        onSubmit={handleSubmit}
      >
        {" "}
        <div className="d-flex container align-items-center">
          <label className="form-input p-2">
            <h6>Rating:</h6>
            <Rating
              name="review"
              value={newRating}
              onChange={(e, newValue) => {
                setRating(newValue);
              }}
            />
          </label>
          <label className="form-input p-2">
            <h6>Comment:</h6>
            <textarea
              type="text"
              name="review"
              value={newReview}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary mb-1">
          Update Review
        </button>
        {errors.map((error) => (
          <h1 key={error}>{error}</h1>
        ))}
      </form>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-danger mb-1"
          type="click"
          onClick={() => setShowUpdate(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ReviewFormUpdate;
