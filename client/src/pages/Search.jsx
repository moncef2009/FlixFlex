import axios from "axios";
import { useState } from "react";

function Search() {
  const [val, setVal] = useState("");
  const [film, setFilm] = useState([]);
  const getImageUrl = (url) => {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${url}`;
  };

  return (
    <>
      <label for="">chercher</label>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          axios
            .get(
              `https://api.themoviedb.org/3/search/multi?api_key=03399943fb46b70d4da41618c02fb908&language=en-US&query=${val}&page=1&include_adult=false`
            )
            .then((response) => setFilm(response.data.results));
        }}
      >
        ok
      </button>

      {film.map((film) => (
        <>
          <h1>{film.title ? film.title : film.name}</h1>
          <img src={getImageUrl(film.poster_path)} alt="" />
        </>
      ))}
    </>
  );
}

export default Search;
