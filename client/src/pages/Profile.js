import React from "react";

function Profile({ user }) {
  const { username, image, profile_information, reviews } = user;
  function handleReviewClick() {
    console.log("hi");
  }
  return (
    <div>
      <div>
        <img src={image} alt="user" />
        <h1>{username}</h1>
      </div>
      <div>
        <h1>Information</h1>
        <p>{profile_information}</p>
        <h1>Reviews</h1>
        <ul>
          {reviews[0].movie ? (
            reviews.map((review) => {
              return (
                <li key={review.id} onClick={handleReviewClick}>
                  {review.movie.title}
                </li>
              );
            })
          ) : (
            <p> No reviews </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
