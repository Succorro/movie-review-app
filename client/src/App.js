import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

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
      console.log(r);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function handleMovieClick(id) {
    const movieData = movies.find((movie) => movie.id === id);
    setMovie(movieData);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/movies/:id">
            <Movie movie={movie} />
          </Route>
          <Route path="/movies">
            <Movies movies={movies} handleMovieClick={handleMovieClick} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
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
