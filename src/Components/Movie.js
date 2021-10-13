import React from 'react';

import { Card, CardHeader, CardActions, CardMedia, Typography, CardActionArea, Tooltip } from "@material-ui/core";
import Styled from 'styled-components';

let Movie = ({ movie }) => (
  <MovieCard>
    {/* {console.log(movie)} */}
    <CardActionArea>

    <CHeader
      title= { 
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
      sx={{p: 0}}
    />
    <Poster
      component="img"
      image={process.env.REACT_APP_POSTER_PATH + movie.poster_path}
    />
    {/* <CActions>
      <IconContainer>
        <StarIcon/>
        <Typography>{movie.vote_average}</Typography>
      </IconContainer>
    </CActions> */}
    </CardActionArea>

  </MovieCard>
);

const CHeader = Styled(CardHeader)`
  padding: 10px;
`;

const CActions = Styled(CardActions)`
  padding: 0;
`;

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
  max-width: 165px;
  font-weight: 600;
`;

const Poster = Styled(CardMedia)`
  width: 100%;
  height: 100%;
`;

export default Movie;