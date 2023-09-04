import React from "react";
import { Rating } from "@mui/material";
function ReviewCard({ reviewData, userId }) {
  const { review, rating, user } = reviewData;
  console.log(reviewData);
  const displayReview = (
    <div>
      <h3>{user.username}</h3>
      <p>{review}</p>
      <Rating name="read-only" value={rating} readOnly />
    </div>
  );

  function handleReviewClick() {}
  if (user.id === userId)
    return (
      <div>
        {displayReview}
        <button onClick={handleReviewClick}>Edit Review</button>
      </div>
    );
  return <>{displayReview}</>;
}

export default ReviewCard;
