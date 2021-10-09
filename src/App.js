import React from 'react';
import "./App.css";

// Any text element ie. a paragraph, heading etc
import { Typography, AppBar, Toolbar, Card, CardHeader, CardContent, Grid, IconButton, makeStyles } from '@material-ui/core';
import MovieIcon from '@mui/icons-material/Movie';
import Styled from 'styled-components';

function App() {

  let movie = [];

  for (let i = 0; i < 11; ++i){
    movie.push("Title");
  }

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <MovieIcon sx={{mr: 2}}/>
        <Typography variant="h6" justify="center">
          Test
        </Typography>
      </Toolbar>
    </AppBar>
    <GridContainer container justify="center" spacing={3}>
      {movie.map((movieTitle) => 
        <GridItem item sm={12} md={6} lg={4} zeroMinWidth>
          <Movie>
            <CardHeader
              action={
                <IconButton >
                  <MovieIcon />
                </IconButton>
              }
              title={movieTitle}
              subheader="Hello"
              />
          </Movie>
        </GridItem>
      )}
    </GridContainer>
    </>
  );
}

const GridContainer = Styled(Grid)`
  margin: auto;
  width: 95%;
  // background-color: red;
`;

const GridItem = Styled(Grid)`
  // background-color: orange;
`;

const Movie = Styled(Card)`
  width: 375px;
  margin: auto;
`;

export default App;
