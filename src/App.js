import React from 'react';
import "./App.css";

// Any text element ie. a paragraph, heading etc
import { Typography } from '@material-ui/core';
import Styled from 'styled-components';
import axios from "axios";
import NavBar from "./Components/NavBar";
import MovieGrid from './Components/MovieGrid';

function App() {

  let data;

  axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a77cd9909bcb0a1088d657d5c9bfdaf5&language=en-US&page=1")
    .then((res) => {
      data = res.data.results;
      console.log(data);
      // console.log(res);
    }).catch((err) => {
      // console.log(err);
    }).finally(() => {
      console.log("Promise finished");
    });

  console.log(data);

  let movie = [];

  for (let i = 0; i < 11; ++i){
    movie.push("Title");
  }

  return (
    <>
    <NavBar/>
    <PageHeading  align="center" variant="h2">Top Hits</PageHeading>
    <MovieGrid movie={movie}/>
    </>
  );
}

const PageHeading = Styled(Typography)`
  margin-top: 50px;
  margin-bottom: 50px
`;

export default App;
