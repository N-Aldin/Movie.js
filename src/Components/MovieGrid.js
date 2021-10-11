import React from 'react';

import { Grid } from "@material-ui/core";
import Styled from "styled-components";
import Movie from "./Movie.js";

let movie = [];

for (let i = 0; i < 11; ++i){
  movie.push("Title");
}

let MovieGrid = ({ movie }) => (
  <GridContainer container justifyContent="center" spacing={3}>
    {movie.map((m) => 
      <GridItem item lg key={m.id}>
        <Movie movie={m} />
      </GridItem>
    )}
  </GridContainer>
);

const GridContainer = Styled(Grid)`
  margin: auto;
  width: 80%;
  // background-color: red;
`;

const GridItem = Styled(Grid)`
  height: auto !important;
`;

export default MovieGrid;