import dotenv from "dotenv";
import "./App.css";
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Styled from 'styled-components';
import axios from "axios";
import NavBar from "./Components/NavBar";
import MovieGrid from './Components/MovieGrid';

dotenv.config();

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&page=1")
      .then(res => {
        setData(res.data.results)
      })
  }, [])

  console.log(data);

  return (
    <>
      <NavBar/>
      <PageHeading align="center" variant="h2">Top Hits</PageHeading>
      <MovieGrid movie={data}/>
    </>
  );
}

const PageHeading = Styled(Typography)`
  margin-top: 50px;
  margin-bottom: 50px
`;

export default App;
