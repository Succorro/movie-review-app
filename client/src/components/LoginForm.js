import React, { useState } from "react";

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
    <form class="align-items-center " onSubmit={handleSubmit}>
      <div class="form-input ">
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
      </div>
      <div class="form-input">
        <label>
          Password:
          <input
            class="form-control my-2"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <button class="btn btn-primary my-3" type="submit">
        {isLoading ? "Loading..." : "Login"}
      </button>

      {errors.map((error) => (
        <h1 key={error}>{error}</h1>
      ))}
    </form>
  );
}

export default LoginForm;
