import React, { useContext } from "react";
import { UserContext } from "../App";

function ProfileInfo({ setShowProfile }) {
  const { userData } = useContext(UserContext);
  const { username, image, profile_information } = userData;
  return (
    <div class="container d-flex col-5 ">
      <div class="card shadow-sm m-5 p-5 " style={{ maxWidth: "400px" }}>
        <div class="card-body ">
          <img
            class="card-img rounded mx-30"
            style={{ maxWidth: "200px" }}
            src={image}
            alt="user"
          />
          <h1>{username}</h1>
        </div>
        <div class="card-body ">
          <h1>Bio:</h1>
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
    </div>
  );
}

export default ProfileInfo;
