import React, { useState } from "react";
import Input from "../Input";
import Error from "../Error";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
    <form className="d-grid align-items-center" onSubmit={handleSubmit}>
      <Input
        type={"text"}
        name={"Create Username:"}
        value={username}
        setter={setUsername}
      />
      <Input
        type={"password"}
        name={"Create Password:"}
        value={password}
        setter={setPassword}
      />

      <Input
        type={"password"}
        name={"Confirm Password:"}
        value={passwordConfirmation}
        setter={setPasswordConfirmation}
      />

      <button className="btn btn-primary my-3" type="submit">
        {isLoading ? "Loading..." : "Sign Up"}
      </button>

      <Error errors={errors} />
    </form>
  );
}

export default SignUpForm;
