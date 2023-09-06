import React, { useContext, useState } from "react";
import { UserContext } from "../App";

function ProfileForm({ setShowProfile, onUpdate }) {
  const { userData } = useContext(UserContext);
  const { id, username, image, profile_information } = userData;
  const [userName, setUserName] = useState(username);
  const [img, setImg] = useState(image);
  const [profileInformation, setprofileInformation] =
    useState(profile_information);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const body = {
      username: userName,
      image: img,
      profile_information: profileInformation,
    };
    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((r) => {
      if (r.ok) {
        setShowProfile(true);
        r.json().then((user) => onUpdate(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-input align-items-center container">
        <div class="card shadow-sm m-5 p-5 d-flex ">
          <div class="card-body w-30">
            <label>
              Profile Image:
              <input
                class="form-control my-2"
                type="text"
                id="image"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </label>
          </div>
          <div class="card-body">
            {" "}
            <label>
              Username:
              <input
                class="form-control my-2"
                type="text"
                id="username"
                autoComplete="off"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </div>
          <div class="card-body ">
            <label>
              {" "}
              Profile Information:
              <textarea
                class="form-control my-2"
                rows="3"
                id="profileInformation"
                value={profileInformation}
                onChange={(e) => setprofileInformation(e.target.value)}
              />
            </label>
          </div>
          <button
            class="btn btn-primary my-3"
            style={{ maxWidth: "200px", alignSelf: "center" }}
            type="submit"
          >
            Edit Profile
          </button>
          <button class="btn" onClick={() => setShowProfile(true)}>
            Cancel
          </button>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
