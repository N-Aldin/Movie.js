import React from 'react';

import { Grid } from "@material-ui/core";
import Styled from "styled-components";
import Movie from "./Movie.js";

let movie = [];

for (let i = 0; i < 11; ++i){
  movie.push("Title");
}

let MovieGrid = (movies) => (
  <GridContainer container justify="center" spacing={3}>
    {/* {console.log(movies)} */}
    {movie.map((movie) => 
      <Grid item lg>
        <Movie movie />
      </Grid>
    )}
  </GridContainer>
);

const GridContainer = Styled(Grid)`
  margin: auto;
  width: 80%;
  // background-color: red;
`;

export default MovieGrid;