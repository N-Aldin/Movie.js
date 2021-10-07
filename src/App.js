import React from 'react';
import "./App.css";

// Any text element ie. a paragraph, heading etc
import { Typography, AppBar, Toolbar, CssBaseline, IconButton } from '@material-ui/core';
import MovieIcon from '@mui/icons-material/Movie';

function App() {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <MovieIcon sx={{mr: 2}}/>
        <Typography variant="h6" >
          Movies
        </Typography>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default App;
