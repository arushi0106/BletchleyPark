import React from "react";
import { AppBar, Container, Typography } from "@material-ui/core";

import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Bletchley-Park
        </Typography>
      </AppBar>
    </Container>
  );
};

export default Navbar;
