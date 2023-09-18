import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieForm from "./components/forms/MovieForm";

export const Context = createContext(null);

function App() {
  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    // all-movies
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    // popular-movies
    fetch("/popular")
      .then((r) => r.json())
      .then((movies) => {
        setPopularMovies(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // user-login

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUserData(user));
      } else {
        r.json().then((error) => {
          console.log(error);
        });
      }
    });
  }, []);

  // loaing icon while data processes
  if (!movies || !popularMovies) return <div id="loader"></div>;

  // render Login for empty session
  if (!userData) return <Login onLogin={setUserData} />;

  // Used to update component UI
  function onCreateReview(review, movieId) {
    // iterate through movies to find reviews list for movie then add new review using spread operator
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        const updatedReviews = [...movie.reviews, review];
        return { ...movie, reviews: updatedReviews };
      }
      return movie;
    });

    const foundMovie = userData.movies.some((movie) => movie.id === movieId);

    if (!foundMovie) {
      const updatedUser = {
        ...userData,
        movies: [
          ...userData.movies,
          movies.find((movie) => movie.id === movieId),
        ],
      };
      setUserData(updatedUser);
    }
    setMovies(updatedMovies);
  }
  function onDeleteReview(deletedReview, movieId) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        const updatedReviews = movie.reviews.filter(
          (review) => review.id !== deletedReview.id
        );
        return { ...movie, reviews: updatedReviews };
      }
      return movie;
    });
    // maps and filters movie that contains reviews for current user
    const movieWithReviews = movies
      .map((movie) => ({
        ...movie,
        reviews: movie.reviews.filter(
          (review) =>
            // ensures that movie reviews match movie and user ids
            review.movie_id === movieId && review.user_id === userData.id
        ),
      }))
      .filter((movie) => movie.reviews.length > 0)[0];
    // conditional used to set user unique movies array to reflect an update in existence of movie reviews for a particular movie
    if (movieWithReviews.reviews.length <= 1) {
      const updatedUser = {
        ...userData,
        movies: userData.movies.filter((movie) => movie.id !== movieId),
      };
      setUserData(updatedUser);
    }
    setMovies(updatedMovies);
  }
  function onUpdateReview(updatedReview, movieId) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        const updatedReviews = movie.reviews.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        );
        return { ...movie, reviews: updatedReviews };
      }
      return movie;
    });
    setMovies(updatedMovies);
  }

  function onUpdateUser(userInfo) {
    const { username, image, profile_information } = userInfo;
    setUserData({
      ...userData,
      username: username,
      image: image,
      profile_information: profile_information,
    });
  }

  function onCreateMovie(movieData) {
    const newMovie = [...movies, movieData];
    setMovies(newMovie);
  }
  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          userData,
          onCreateReview,
          onDeleteReview,
          onUpdateReview,
          onUpdateUser,
        }}
      >
        <div className="App">
          <Navbar
            userImg={userData.image}
            setUser={setUserData}
            movies={movies}
          />
          <Switch>
            <Route path="/movies/new">
              {" "}
              <MovieForm onCreateMovie={onCreateMovie} />
            </Route>
            <Route path="/movies/:id">
              <Movie movies={movies} />
            </Route>
            <Route path="/movies">
              <Movies movies={movies} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home popularMovies={popularMovies} />
            </Route>
          </Switch>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
