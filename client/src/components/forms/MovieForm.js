import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../Input";

function MovieForm({ onCreateMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      title: title,
      genre: genre,
      director: director,
      release_year: releaseYear,
      description: description,
    };
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((r) => {
      if (r.ok) {
        history.push("/movies");
        r.json().then((movie) => onCreateMovie(movie));
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <div>
      <h1 className=" p-2 m-5"> New Movie</h1>
      <form className="container border" onSubmit={handleSubmit}>
        {" "}
        <div className="form-input d-flex row row-cols-1 justify-content-center ">
          <Input type={"text"} name={"Title"} value={title} setter={setTitle} />
          <Input type={"text"} name={"Genre"} value={genre} setter={setGenre} />
          <Input
            type={"text"}
            name={"Director"}
            value={director}
            setter={setDirector}
          />
          <Input
            type={"date"}
            name={"Release Year"}
            value={releaseYear}
            setter={setReleaseYear}
          />
          <label>
            Description:
            <textarea
              className="form-control my-2"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button
            className="btn btn-warning my-3 "
            style={{ maxWidth: "200px" }}
            type="submit"
          >
            Create Movie
          </button>
          {errors.map((error) => (
            <p className="text-danger" key={error}>
              {error}
            </p>
          ))}
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
