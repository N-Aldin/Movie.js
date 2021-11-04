import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MovieIcon from "@mui/icons-material/Movie";
import Styled from 'styled-components';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar style={{ background: '#FFFFFF' }}>
      <MovieIcon sx={{ mr: 2 }} style={{ fill: "black" }} />
      <NavTitle variant="h6" justify="center">
        Movie.js
      </NavTitle>
    </Toolbar>
  </AppBar>
);

const NavTitle = Styled(Typography)`
  color: black;
  font-weight: 600;
`;

export default NavBar;