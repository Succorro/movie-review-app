import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({ reviews, userId }) {
  return (
    <div>
      <h1>User Reviews</h1>
      {reviews.map((review) => (
        <ReviewCard key={review.id} userId={userId} reviewData={review} />
      ))}
    </div>
  );
}

export default ReviewList;
