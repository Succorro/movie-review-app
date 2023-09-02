import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
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
    <div class="container d-flex flex-wrap border-bottom mt-3 align-items-center">
      <ul class="nav me-auto p-20">
        <Link
          class="nav px-2 link-opacity-50-hover link-underline link-underline-opacity-0"
          to="/"
        >
          Home
        </Link>
        <Link
          class="nav px-2 link-opacity-50-hover link-underline link-underline-opacity-0"
          to="/movies"
        >
          Movies
        </Link>
      </ul>
      <ul class="nav">
        <Link class="navbar-brand px-3" to="/profile">
          <img
            class="img-fluid rounded float-end mt-1"
            width="30"
            src={user.image}
            alt="User"
          />
        </Link>
        <button
          class="btn btn-outline-primary px-1 align-middle mb-2"
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
