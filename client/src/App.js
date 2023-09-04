import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/movies").then((r) => {
      if (r.ok) {
        r.json().then((movies) => {
          setMovies(movies);
        });
      }
    });
  }, []);

  useEffect(() => {
    // auto-login

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!movies) return "loading...";
  if (!user) return <Login onLogin={setUser} />;
  function findMovie(id) {
    return movies.filter((movie) => movie.id === id);
  }
  function onCreateReview(review, movieId) {
    // iterate through movies to find reviews list for movie then add new review using spread operator
    const currentMovie = findMovie(movieId)[0];
    currentMovie.reviews = [...currentMovie.reviews, review];
    const mapMovies = movies.map((movie) => {
      if (movie.id === currentMovie.id) {
        return currentMovie;
      } else return movie;
    });
    setMovies(mapMovies);
  }
  function onDeleteReview(deletedReview, movieId) {
    const currentMovie = findMovie(movieId)[0];
    const filteredReviews = currentMovie.reviews.filter(
      (review) => review.id !== deletedReview.id
    );
    currentMovie.reviews = filteredReviews;
    const filteredMovies = movies.map((movie) => {
      if (movie.id === currentMovie.id) {
        return currentMovie;
      } else return movie;
    });
    setMovies(filteredMovies);
  }
  function onUpdateReview(updatedReview, movieId) {
    const currentMovie = findMovie(movieId)[0];
    const filteredReviews = currentMovie.reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else return review;
    });
    currentMovie.reviews = filteredReviews;
    const filteredMovies = movies.map((movie) => {
      if (movie.id === currentMovie.id) {
        return currentMovie;
      } else return movie;
    });
    setMovies(filteredMovies);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/movies/:id">
            <Movie
              userId={user.id}
              movies={movies}
              onCreateReview={onCreateReview}
              onDeleteReview={onDeleteReview}
              onUpdateReview={onUpdateReview}
            />
          </Route>
          <Route path="/movies">
            <Movies movies={movies} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
