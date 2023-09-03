import React, { useState } from "react";
import Rating from "@mui/material/Rating/Rating";

function ReviewForm({ setShowForm, movieId, userId, onCreateReview }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        rating,
        user_id: userId,
        movie_id: movieId,
      }),
    }).then((r) => {
      if (r.ok) {
        setShowForm(false);
        r.json().then((review) => onCreateReview(review, movieId));
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  return (
    <div>
      ReviewForm
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          Comments
          <textarea
            type="text"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <label>
          Rating
          <Rating
            name="review"
            value={rating}
            onChange={(e, newValue) => {
              setRating(newValue);
            }}
          />
        </label>
        <button type="submit">Create Review</button>
        {errors.map((error) => (
          <h1 key={error}>{error}</h1>
        ))}
      </form>
    </div>
  );
}

export default ReviewForm;
