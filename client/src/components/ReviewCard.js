import React, { useState } from "react";
import { Rating } from "@mui/material";
import ReviewFormUpdate from "./ReviewFormUpdate";

function ReviewCard({
  reviewData,
  userId,
  movieId,
  onDeleteReview,
  onUpdateReview,
}) {
  const { id, review, rating, user } = reviewData;
  const [showUpdate, setShowUpdate] = useState(false);

  const displayReview = (
    <div className=" d-flex gap-3 " style={{ maxHeight: "100px" }}>
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
  if (user.id === userId)
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
          <div className="list-group">
            <div
              className="list-group-item"
              style={{ width: "300px", height: "150px" }}
            >
              {displayReview}
              <div
                className="d-flex"
                style={{
                  position: "absolute",
                  bottom: 0,
                  marginBottom: "10px",
                }}
              >
                <button
                  className="btn btn-primary p-1 "
                  style={{ maxHeight: "35px" }}
                  onClick={() => setShowUpdate(true)}
                >
                  Edit Review
                </button>
                <button
                  className="btn btn-danger p-1 ml-1"
                  style={{ maxHeight: "35px" }}
                  onClick={() => handleDeleteClick(reviewData)}
                >
                  Delete Review
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  return (
    <div className="list-group">
      {" "}
      <div
        className="list-group-item"
        style={{ width: "300px", height: "150px" }}
      >
        {displayReview}
      </div>
    </div>
  );
}

export default ReviewCard;
