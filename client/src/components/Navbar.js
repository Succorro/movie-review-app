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
    <div>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/profile">
        <img src={user.image} alt="User" />
      </Link>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default Navbar;
