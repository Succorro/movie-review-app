import React, { useState } from "react";
import Input from "../Input";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <form className="d-grid align-items-center " onSubmit={handleSubmit}>
      <Input
        type={"text"}
        name={"Username:"}
        value={username}
        setter={setUsername}
      />
      <Input
        type={"password"}
        name={"Password:"}
        value={password}
        setter={setPassword}
      />

      <button className="btn btn-primary my-3" type="submit">
        {isLoading ? "Loading..." : "Login"}
      </button>

      {errors.map((error) => (
        <p className="text-danger" key={error}>
          {error}
        </p>
      ))}
    </form>
  );
}

export default LoginForm;
