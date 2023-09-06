import React from "react";

function ProfileInfo({ user, setShowProfile }) {
  const { username, image, profile_information } = user;
  return (
    <div class="container">
      <div class="card shadow-sm m-5 p-5 d-flex ">
        <div class="card-body w-30">
          <img class="card-img-top" src={image} alt="user" />
          <h1>{username}</h1>
        </div>
        <div class="card-body ">
          <h1>Bio</h1>
          <p class="card-text">{profile_information}</p>
        </div>
        <button
          onClick={() => setShowProfile(false)}
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
