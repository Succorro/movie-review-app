import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState("");
  const [profileInformation, setprofileInformation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image: image,
        profile_information: profileInformation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form class="" onSubmit={handleSubmit}>
      <div class="form-input d-flex align-items-center row row-cols-1 bg-body-tertiary ">
        <label>
          Username:
          <input
            class="form-control my-2"
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            class="form-control my-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>

        <label>
          Password Confirmation:
          <input
            class="form-control my-2"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </label>

        <label>
          Profile Image:
          <input
            class="form-control my-2"
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        {/* <label>
          {" "}
          Profile Information:
          <textarea
            style={{ maxHeight: "20px" }}
            rows="3"
            id="profileInformation"
            value={profileInformation}
            onChange={(e) => setprofileInformation(e.target.value)}
          />
        </label> */}

        <button class="btn btn-primary my-3" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>

        {errors.map((error) => (
          <h1 key={error}>{error}</h1>
        ))}
      </div>
    </form>
  );
}

export default SignUpForm;
