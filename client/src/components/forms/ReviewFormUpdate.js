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
    <div className="card m-3 " style={{ width: "300px", height: "150px" }}>
      <form
        className="form-input row row-cols-1 justify-content-center "
        onSubmit={handleSubmit}
      >
        {" "}
        <label className="d-grid" style={{ width: "150px" }}>
          <p className="mt-1">Rating:</p>
          <Rating
            name="review"
            value={newRating}
            onChange={(e, newValue) => {
              setRating(newValue);
            }}
          />
        </label>
        <label className="d-grid" style={{ width: "150px" }}>
          <p className="mt-1">Comment:</p>
          <textarea
            type="text"
            name="review"
            value={newReview}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-danger mt-2  m-1"
            type="click"
            onClick={() => setShowUpdate(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-secondary mt-2 m-1">
            Update Review
          </button>
        </div>
        {errors.map((error) => (
          <h1 key={error}>{error}</h1>
        ))}
      </form>
    </div>
  );
}

export default ReviewFormUpdate;
