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
          {reviews.map((review) => {
            console.log(review);
            return <li onClick={handleReviewClick}>{review.movie.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
