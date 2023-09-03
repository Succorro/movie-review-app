import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Profile({ user }) {
  const { username, image, profile_information, reviews } = user;
  const history = useHistory();
  function handleReviewClick(id) {
    console.log("hi");
    history.push(`/movies/${id}`);
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
          {reviews ? (
            reviews.map((review) => {
              return (
                <li
                  key={review.id}
                  onClick={() => handleReviewClick(review.movie.id)}
                >
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
