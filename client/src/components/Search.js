import React, { useState } from "react";
import Input from "./Input";
import Result from "./Result";

function Search({ movies }) {
  const [search, setSearch] = useState("");
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredMovies);
  return (
    <div>
      <Input type={"text"} value={search} setter={setSearch} />
      {search === "" ? (
        <></>
      ) : (
        <Result movies={filteredMovies} setter={setSearch} />
      )}
    </div>
  );
}

export default Search;
