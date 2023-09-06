import React from "react";
import MoviesList from "../components/MoviesList";

function Home({ popularMovies }) {
  return (
    <div>
      <main className="px-3">
        <h1>Home</h1>
        <p className="lead">
          {" "}
          Welcome movie enthusiasts, get started by clicking on trending movies
          below!
        </p>
      </main>

      <div className="container ">
        <MoviesList movies={popularMovies} />
      </div>
    </div>
  );
}

export default Home;
