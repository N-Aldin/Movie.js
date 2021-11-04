import React from 'react';
import { Card, CardHeader, CardMedia, Typography, CardActionArea, Tooltip } from "@material-ui/core";
import Styled from 'styled-components';

const Movie = ({ movie, movieID }) => {

  return (
    <MovieCard>
      <CardActionArea onClick={() => { movieID(movie.id) }}>

        <CHeader
          title={
            <Tooltip
              arrow
              title={
                <Typography>
                  {movie.title}
                </Typography>
              }
              placement="top"
            >
              <MovieTitle noWrap>
                {movie.title}
              </MovieTitle>
            </Tooltip>
          }
          subheader={movie.release_date}
          sx={{ p: 0 }}
        />
        <Poster
          component="img"
          image={process.env.REACT_APP_POSTER_PATH + movie.poster_path}
        />
      </CardActionArea>

    </MovieCard>
  );
}

const CHeader = Styled(CardHeader)`
  padding: 10px;
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
  max-width: 165px;
  font-weight: 600;
`;

const Poster = Styled(CardMedia)`
  width: 100%;
  height: 100%;
`;

export default Movie;