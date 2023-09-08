import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({ reviews, onDeleteReview, movieId, onUpdateReview }) {
  return (
    <div className="row">
      {reviews.map((review) => (
        <div className="col-md-5">
          <ReviewCard
            key={review.id}
            onDeleteReview={onDeleteReview}
            reviewData={review}
            movieId={movieId}
            onUpdateReview={onUpdateReview}
          />
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
