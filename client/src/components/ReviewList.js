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
      <h1>Reviews</h1>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
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
    </div>
  );
}

export default ReviewList;
