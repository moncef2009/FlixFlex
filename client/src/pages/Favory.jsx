import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavory } from "../features/user/userSlice";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Favory() {
  const { favorys } = useSelector((state) => state.user);
  const fav = [];
  const [films, setFilms] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavory());
  });
  useEffect(() => {
    favorys.map((f) =>
      axios
        .get(
          `
https://api.themoviedb.org/3/search/multi?api_key=03399943fb46b70d4da41618c02fb908&language=en-US&query=${f}&page=1&include_adult=false`
        )
        .then((res) => {
          fav.push(res.data.results[0]);
        })
    );
    setFilms(fav);
  }, [dispatch]);

  const getImageUrl = (url) => {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${url}`;
  };

  return (
    <>
      {films.map((film) => (
        <MovieCard
          image={getImageUrl(film.poster_path)}
          title={film.title}
          overviw={film.overview}
        />
      ))}
    </>
  );
}

export default Favory;
