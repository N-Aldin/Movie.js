import React, { useState, useEffect } from 'react';
import "./App.css";

// Any text element ie. a paragraph, heading etc
import { Typography } from '@material-ui/core';
import Styled from 'styled-components';
import axios from "axios";
import NavBar from "./Components/NavBar";
import MovieGrid from './Components/MovieGrid';

function App() {

  // Initialize a rows state variable that will be set to [] on the initial load.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a77cd9909bcb0a1088d657d5c9bfdaf5&language=en-US&page=1")
      .then(res => {
        setData(res.data.results)
      })
  }, [])

  console.log(data);

  return (
    <>
      <NavBar/>
      <PageHeading  align="center" variant="h2">Top Hits</PageHeading>
      <MovieGrid movie={data}/>
    </>
  );
}

const PageHeading = Styled(Typography)`
  margin-top: 50px;
  margin-bottom: 50px
`;

export default App;
