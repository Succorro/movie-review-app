import React, { useState, useContext } from "react";
import Rating from "@mui/material/Rating/Rating";
import { UserContext } from "../../App";
import Error from "../Error";

function ReviewForm({ setShowForm, movieId, onCreateReview }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);
  const { userData } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: review,
        rating: rating,
        user_id: userData.id,
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
    <div
      className="list-group card mt-0  pt-1 justify-content-center"
      style={{ maxWidth: "500px", margin: "auto" }}
    >
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
              value={rating}
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
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
        </div>
        <button className="btn btn-warning mb-1" type="submit">
          Create Review
        </button>
        <Error errors={errors} />
      </form>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-danger mb-1"
          type="click"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
