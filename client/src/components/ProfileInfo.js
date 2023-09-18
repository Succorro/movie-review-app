import React, { useContext } from "react";
import { Context } from "../App";
import TitleCard from "./TitleCard";

function ProfileInfo({ setShowProfile }) {
  const { userData } = useContext(Context);
  const { username, image, profile_information, unique_movies } = userData;

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
      <div className="card-body">
        <h3>Reviewed Movies</h3>
        <TitleCard movies={unique_movies} />
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
