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

export const UserContext = createContext(null);

function App() {
  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    // all-movies
    fetch("/movies").then((r) => {
      if (r.ok) {
        r.json().then((movies) => {
          setMovies(movies);
        });
      }
    });
  }, []);
  useEffect(() => {
    // popular-movies
    fetch("/popular").then((r) => {
      if (r.ok) {
        r.json().then((movies) => {
          console.log(movies);
          setPopularMovies(movies);
        });
      }
    });
  }, []);

  useEffect(() => {
    // auto-login

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUserData(user));
      }
    });
  }, []);

  if (!movies || !popularMovies) return "loading...";
  if (!userData) return <Login onLogin={setUserData} />;
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
  function onUpdateUser(userInfo) {
    const { username, image, profile_information } = userInfo;
    console.log(userInfo);
    setUserData({
      ...userData,
      username: username,
      image: image,
      profile_information: profile_information,
    });
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar userImg={userData.image} setUser={setUserData} />
        <Switch>
          <Route path="/movies/:id">
            <UserContext.Provider value={{ userData }}>
              <Movie
                // userId={user.id}
                movies={movies}
                onCreateReview={onCreateReview}
                onDeleteReview={onDeleteReview}
                onUpdateReview={onUpdateReview}
              />
            </UserContext.Provider>
          </Route>
          <Route path="/movies">
            <Movies movies={movies} />
          </Route>
          <Route path="/profile">
            <UserContext.Provider value={{ userData }}>
              <Profile onUpdate={onUpdateUser} />
            </UserContext.Provider>
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
    </BrowserRouter>
  );
}

export default App;
