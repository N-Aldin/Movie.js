import "./App.css";
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab'
import Styled from 'styled-components';
import axios from "axios";
import NavBar from "./Components/NavBar";
import MovieGrid from './Components/MovieGrid';
import MovieInfo from './Components/MovieInfo';
import MoviePagination from './Components/MoviePagination';

function App() {

  const [data, setData] = useState([]);
  const [movieDisplay, setMovieDisplay] = useState(0);
  const [page, setPage] = useState(1);

  // Fetch data on initial render
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&page=" + page)
      .then(res => {
        setData(res.data.results)
      }).catch(err => console.log(err));
  }, [page]);

  const handlePagination = (e, page) => {
    setPage(page);
    // console.log(page)
  };

  // This prints twice because of the React strictmode
  // UseEffect still only runs once so everything else here is functional
  // console.log("Rendered");

  return (
    <>
      <NavBar />
      <PageHeading align="center" variant="h2">Top Hits</PageHeading>
      <MovieGrid movie={data} movieID={setMovieDisplay} />

      {movieDisplay && <MovieInfo movieID={movieDisplay} setMovieDisplay={setMovieDisplay} />}

      <MoviePagination handlePagination={handlePagination} pageCount={page} />
    </>
  );
}

const PageHeading = Styled(Typography)`
  margin-top: 50px;
  margin-bottom: 50px
`;

export default App;
