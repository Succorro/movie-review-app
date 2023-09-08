import React from "react";
import { Link } from "react-router-dom";

function Navbar({ userImg, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
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
          Contact Us
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
    </div>
  );
}

export default Navbar;
