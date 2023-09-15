import React, { useContext } from "react";
import { Context } from "../App";

function ProfileInfo({ setShowProfile }) {
  const { userData } = useContext(Context);
  const { username, image, profile_information, reviews } = userData;

  console.log(reviews);

  const filteredTitles = () => {
    return [...new Set(reviews.map((review) => review.movie.title))];
  };
  console.log(filteredTitles());
  return (
    <div className="d-grid justify-content-center p-2">
      <div className="card-body ">
        <img
          className="card-img mx-30"
          style={{ maxWidth: "200px" }}
          src={image}
          alt="user"
        />
        <h1>{username}</h1>
      </div>
      <div className="card-body ">
        <h3>Bio:</h3>
        <p className="card-text">{profile_information}</p>
      </div>
      <button
        onClick={() => setShowProfile(false)}
        style={{ alignSelf: "center" }}
        className="btn btn-outline-primary my-3"
        type="submit"
      >
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileInfo;
