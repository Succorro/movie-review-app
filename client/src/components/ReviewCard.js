import React, { useState, useContext } from "react";
import { Rating } from "@mui/material";
import ReviewFormUpdate from "./forms/ReviewFormUpdate";
import { UserContext } from "../App";

function ReviewCard({ reviewData, movieId, onDeleteReview, onUpdateReview }) {
  const { id, review, rating, user } = reviewData;
  const [showUpdate, setShowUpdate] = useState(false);
  const { userData } = useContext(UserContext);

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
    <div className="card text-bg-light m-2">
      {" "}
      <div
        className="list-group-item "
        style={{ width: "300px", height: "150px" }}
      >
        {displayReview}
      </div>
    </div>
  );
}

export default ReviewCard;
