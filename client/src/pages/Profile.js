import React from "react";

function Profile({ user }) {
  const { username, image, profile_information } = user;
  return (
    <div>
      <div>
        <h1>{username}</h1>
      </div>
      <div>
        <h1>Information</h1>
        <p>{profile_information}</p>
      </div>
    </div>
  );
}

export default Profile;
