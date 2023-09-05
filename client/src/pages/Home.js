import React from "react";
import MoviesList from "../components/MoviesList";

function Home({ popularMovies }) {
  return (
    <div>
      <main class="px-3">
        <h1>Home</h1>
        <p class="lead">
          {" "}
          Welcome movie enthusiasts, get started by clicking on the movies
          below!
        </p>
      </main>

      <div class="container ">
        <MoviesList movies={popularMovies} />
      </div>
    </div>
  );
}

export default Home;
