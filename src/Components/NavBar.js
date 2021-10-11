import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MovieIcon from "@mui/icons-material/Movie";

let NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <MovieIcon sx={{mr: 2}}/>
      <Typography variant="h6" justify="center">
        MovieDB
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;