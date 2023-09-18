import React, { useState, useContext } from "react";
import { Rating } from "@mui/material";
import ReviewFormUpdate from "./forms/ReviewFormUpdate";
import { Context } from "../App";

function ReviewCard({ reviewData, movieId }) {
  const { review, rating, username, user_id } = reviewData;
  const [showUpdate, setShowUpdate] = useState(false);
  const { userData, onDeleteReview } = useContext(Context);
  const displayReview = (
    <div className="d-inline-block mt-1" style={{ maxHeight: "100px" }}>
      <div>
        <h3>{username}</h3>
        <Rating name="read-only" value={rating} readOnly />
      </div>
      <div className="card-text ">
        <div style={{ overflow: "auto", maxHeight: "55px" }}>{review}</div>
      </div>
    </div>
  );

  function handleDeleteClick(deletedReview) {
    fetch(`/reviews/${deletedReview.id}`, {
      method: "DELETE",
    });
    onDeleteReview(deletedReview, movieId);
  }

  if (user_id === userData.id)
    return (
      <div className="col-md-4">
        {" "}
        {showUpdate ? (
          <ReviewFormUpdate
            setShowUpdate={setShowUpdate}
            reviewData={reviewData}
            movieId={movieId}
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
      </div>
    );
  return (
    <div className="col-md-4">
      <div className="card m-3" style={{ width: "300px", height: "200px" }}>
        {displayReview}
      </div>
    </div>
  );
}

export default ReviewCard;
