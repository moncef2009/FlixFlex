import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../components/MovieCard";
import { getFavory } from "../features/user/userSlice";

function Films() {
  const [films, setFilms] = useState([]);
  const [totalPages, settotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=03399943fb46b70d4da41618c02fb908&language=en-US&page=${page}`
      )
      .then((response) => {
        settotalPages(response.data.total_pages);
        setFilms(response.data.results);
      });
  }, [page]);

  const getImageUrl = (url) => {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${url}`;
  };
  const onPageChange = (e, p) => {
    console.log(p);
    setPage(p);
  };
  return (
    <div className="page">
      {films.map((film) => (
        <MovieCard
          image={getImageUrl(film.poster_path)}
          title={film.title}
          overviw={film.overview}
          id={film.id}
        />
      ))}
      <Pagination count={totalPages} onChange={onPageChange} />
    </div>
  );
}

export default Films;
