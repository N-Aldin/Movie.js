import React from 'react';

import {Card, CardHeader, CardActions, CardMedia, IconButton, Typography, CardActionArea} from "@material-ui/core";
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import WebIcon from '@mui/icons-material/Language';
import Styled from 'styled-components';

let Movie = ({ movie }) => (
  <MovieCard>
    {console.log(movie)}
    <CardActionArea>

    <CardHeader
      title={<MovieTitle noWrap>{movie.title}</MovieTitle>}
      subheader={movie.release_date}
    />
    <Poster
      component="img"
      image={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
    />
    <CardActions>
      {/* <IconButton style={{backgroundColor: "transparent", padding: "12px 5px"}}> */}
      {/* <IconButton style={{ "&:hover": { backgroundColor: "transparent" }} } aria-label="Delete"> */}
      <IconContainer>
        <StarIcon/>
        <Typography>{movie.vote_average}</Typography>
      </IconContainer>
      {/* </IconButton> */}
    </CardActions>
    </CardActionArea>

  </MovieCard>
);

const IconContainer = Styled.div`
  display: flex;
  padding: 12px 5px;
  color: grey;
`;

const MovieCard = Styled(Card)`
  width: 185px;
  // height: 394px;
  // height: auto;
  margin: auto;
  transition: transform 0.25s;

  &:hover {
    transform: perspective(700px) translateZ(25px)
  }
`;

const MovieTitle = Styled(Typography)`
  // max-width: 178px;
  max-width: 165px;
  font-weight: 600;
`;

const Poster = Styled(CardMedia)`
  width: 100%;
  height: 100%;
`;

export default Movie;