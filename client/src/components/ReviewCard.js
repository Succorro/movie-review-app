import React, { useState, useContext } from "react";
import { Rating } from "@mui/material";
import ReviewFormUpdate from "./forms/ReviewFormUpdate";
import { UserContext } from "../App";

function ReviewCard({ reviewData, movieId, onDeleteReview, onUpdateReview }) {
  const { id, review, rating, user } = reviewData;
  const [showUpdate, setShowUpdate] = useState(false);
  const { userData } = useContext(UserContext);

  const displayReview = (
    <div className="d-inline-block mt-1" style={{ maxHeight: "100px" }}>
      <div>
        <h3>{user.username}</h3>
        <Rating name="read-only" value={rating} readOnly />
      </div>
      <div className="card-text">
        <p>{review}</p>
      </div>
    </div>
  );

  function handleDeleteClick(deletedReview) {
    fetch(`/reviews/${deletedReview.id}`, {
      method: "DELETE",
    });
    onDeleteReview(deletedReview, movieId);
  }
  if (user.id === userData.id)
    return (
      <>
        {" "}
        {showUpdate ? (
          <ReviewFormUpdate
            setShowUpdate={setShowUpdate}
            review={review}
            rating={rating}
            movieId={movieId}
            onUpdateReview={onUpdateReview}
            id={id}
          />
        ) : (
          <div
            className="card m-3 d-grid"
            style={{ width: "300px", height: "200px" }}
          >
            {displayReview}
            <div
              className="d-flex justify-content-center"
              style={{ maxHeight: "50px" }}
            >
              <button
                className="btn btn-primary  m-1"
                onClick={() => setShowUpdate(true)}
              >
                Edit Review
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={() => handleDeleteClick(reviewData)}
              >
                Delete Review
              </button>
            </div>
          </div>
        )}
      </>
    );
  return (
    <div className="card m-3" style={{ width: "300px", height: "200px" }}>
      {displayReview}
    </div>
  );
}

export default ReviewCard;
