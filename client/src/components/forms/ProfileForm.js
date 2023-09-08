import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Input from "../Input";
import Error from "../Error";

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
    <form
      class="form d-grid justify-content-center p-2"
      onSubmit={handleSubmit}
    >
      <Input
        type={"text"}
        name={"Profile Image:"}
        value={img}
        setter={setImg}
      />
      <Input
        type={"text"}
        name={"New Username:"}
        value={userName}
        setter={setUserName}
      />

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
      <button class="btn btn-primary my-3" type="submit">
        Edit Profile
      </button>
      <button
        class="btn btn-outline-danger"
        onClick={() => setShowProfile(true)}
      >
        Cancel
      </button>
      <Error errors={errors} />
    </form>
  );
}

export default ProfileForm;
