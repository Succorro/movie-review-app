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
  // console.log(reviewData);

  const displayReview = (
    <div>
      <h3>{user.username}</h3>
      <p>{review}</p>
      <Rating name="read-only" value={rating} readOnly />
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
          <div>
            {displayReview}
            <button onClick={() => setShowUpdate(true)}>Edit Review</button>
            <button onClick={() => handleDeleteClick(reviewData)}>
              Delete Review
            </button>
          </div>
        )}
      </>
    );
  return <>{displayReview}</>;
}

export default ReviewCard;
