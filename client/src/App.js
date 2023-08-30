import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/movies/:id">
            <Movie />
          </Route>
          <Route path="/">
            <h1>Signed in!!</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
