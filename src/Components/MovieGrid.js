import React from 'react';
import { Grid } from "@material-ui/core";
import Styled from "styled-components";
import Movie from "./Movie.js";

const MovieGrid = ({ movie, movieID }) => (
  <GridContainer container justifyContent="center" spacing={3}>
    {movie.map((m) =>
      <GridItem item lg key={m.id}>
        <Movie movie={m} movieID={movieID} />
      </GridItem>
    )}
  </GridContainer>
);

const GridContainer = Styled(Grid)`
  margin: auto;
  width: 80%;
`;

const GridItem = Styled(Grid)`
  height: auto;
`;

export default MovieGrid;