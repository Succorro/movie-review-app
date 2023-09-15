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

  if (!movies || !popularMovies) return <div id="loader"></div>;
  if (!userData) return <Login onLogin={setUserData} />;

  function onCreateReview(review, movieId) {
    // iterate through movies to find reviews list for movie then add new review using spread operator
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        const updatedReviews = [...movie.reviews, review];
        return { ...movie, reviews: updatedReviews };
      }
      return movie;
    });

    setMovies(updatedMovies);
  }
  function onDeleteReview(deletedReview, movieId) {
    const deletedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        const updatedReviews = movie.reviews.filter(
          (review) => review.id !== deletedReview.id
        );
        return { ...movie, reviews: updatedReviews };
      }
      return movie;
    });
    setMovies(deletedMovies);
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
            <Context.Provider
              value={{
                userData,
                onCreateReview,
                onDeleteReview,
                onUpdateReview,
              }}
            >
              <Movie movies={movies} />
            </Context.Provider>
          </Route>
          <Route path="/movies">
            <Movies movies={movies} />
          </Route>
          <Route path="/profile">
            <Context.Provider value={{ userData, onUpdateUser }}>
              <Profile />
            </Context.Provider>
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
