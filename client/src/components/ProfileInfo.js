import React, { useContext } from "react";
import { UserContext } from "../App";

function ProfileInfo({ setShowProfile }) {
  const { userData } = useContext(UserContext);
  const { username, image, profile_information } = userData;
  return (
    <div class="d-grid justify-content-center p-2">
      <div class="card-body ">
        <img
          class="card-img mx-30"
          style={{ maxWidth: "200px" }}
          src={image}
          alt="user"
        />
        <h1>{username}</h1>
      </div>
      <div class="card-body ">
        <h3>Bio:</h3>
        <p class="card-text">{profile_information}</p>
      </div>
      <button
        onClick={() => setShowProfile(false)}
        style={{ alignSelf: "center" }}
        class="btn btn-primary my-3"
        type="submit"
      >
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileInfo;
