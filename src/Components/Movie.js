import React from 'react';

import {Card, CardHeader, CardActions, CardMedia, IconButton, Typography} from "@material-ui/core";
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import Styled from 'styled-components';

let Movie = ({ movie }) => (
  <MovieCard>
    {console.log(movie)}
    <CardHeader
      action={
        <IconButton >
          <MovieIcon />
        </IconButton>
      }
      title={<MovieTitle noWrap>{movie.title}</MovieTitle>}
      subheader={movie.release_date}
    />
    <Poster
      component="img"
      image={"https://image.tmdb.org/t/p/w342" + movie.poster_path}
    />
    <CardActions>
      <IconButton>
        <StarIcon/>
        <Typography>{movie.vote_average}</Typography>
      </IconButton>
    </CardActions>
  </MovieCard>
);

const MovieCard = Styled(Card)`
  width: 250px;
  height: 394px;
  // height: auto;
  margin: auto;
  transition: transform 0.25s;

  &:hover {
    transform: perspective(700px) translateZ(25px)
  }
`;

const MovieTitle = Styled(Typography)`
  max-width: 178px;
  font-weight: 600;
`;

const Poster = Styled(CardMedia)`
  margin: auto;
  width: 250px;
  height: 250px;
`;

export default Movie;