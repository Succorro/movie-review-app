import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({
  reviews,
  userId,
  onDeleteReview,
  movieId,
  onUpdateReview,
}) {
  return (
    <div>
      <h1>User Reviews</h1>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          onDeleteReview={onDeleteReview}
          userId={userId}
          reviewData={review}
          movieId={movieId}
          onUpdateReview={onUpdateReview}
        />
      ))}
    </div>
  );
}

export default ReviewList;
