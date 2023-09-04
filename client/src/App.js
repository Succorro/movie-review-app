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

  if (!user) return <Login onLogin={setUser} />;
  function onCreateReview(review, movieId) {
    // iterate through movies to find reviews list for movie then add new review using spread operator
  }
  if (!movies) return "loading...";
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
            />
          </Route>
          <Route path="/movies">
            <Movies movies={movies} />
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
