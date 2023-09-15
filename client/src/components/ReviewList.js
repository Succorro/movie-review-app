import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({ reviews, movieId }) {
  return (
    <div className="row">
      {reviews.map((review) => (
        <ReviewCard key={review.id} reviewData={review} movieId={movieId} />
      ))}
    </div>
  );
}

export default ReviewList;
