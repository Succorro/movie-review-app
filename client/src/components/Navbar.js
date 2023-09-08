import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";

function Navbar({ userImg, setUser }) {
  const [errors, setErrors] = useState([]);
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <div className="container d-flex flex-wrap border-bottom mt-3 align-items-center">
      <ul className="nav me-auto p-20">
        <Link
          className="nav px-2 link-opacity-50-hover link-underline link-underline-opacity-0"
          to="/"
        >
          Home
        </Link>
        <Link
          className="nav px-2 link-opacity-50-hover link-underline link-underline-opacity-0"
          to="/movies"
        >
          Movies
        </Link>
        <Link
          className="nav px-2 link-opacity-50-hover link-underline link-underline-opacity-0"
          to="/about"
        >
          About
        </Link>
        <Link
          className="nav px-2 link-opacity-50-hover link-underline link-underline-opacity-0"
          to="/contact"
        >
          Contact
        </Link>
      </ul>
      <ul className="nav">
        <Link className="navbar-brand px-3" to="/profile">
          <img
            className="img-fluid rounded float-end mt-1"
            width="30"
            src={userImg}
            alt="User"
          />
        </Link>
        <button
          className="btn btn-outline-primary px-1 align-middle mb-2"
          width="30"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </ul>
      <Error errors={errors} />
    </div>
  );
}

export default Navbar;
