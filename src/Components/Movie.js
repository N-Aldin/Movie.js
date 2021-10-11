import React from 'react';

import {Card, CardHeader, CardActions, CardMedia, IconButton, Typography} from "@material-ui/core";
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import Styled from 'styled-components';
import testImg from "../Data/movieImg.jpg";

let Movie = ({movie}) => (
  <MovieCard>
    {/* {console.log(movie)}; */}
    <CardHeader
      action={
        <IconButton >
          <MovieIcon />
        </IconButton>
      }
      title="Title"
      subheader="Sept. 9, 2018"
    />
    <Poster
      component="img"
      image={testImg}
    />
    <CardActions>
      <IconButton>
        <StarIcon/>
        <Typography>4.8</Typography>
      </IconButton>
    </CardActions>
  </MovieCard>
);

const MovieCard = Styled(Card)`
  width: 250px;
  height: 400px;
  // width: 200;
  // height: 300;
  margin: auto;
  transition: transform 0.25s;

  &:hover {
    transform: perspective(700px) translateZ(25px)
  }
`;

const Poster = Styled(CardMedia)`
  margin: auto;
  width: 250px;
  height: 250px;
`;

export default Movie;