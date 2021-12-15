import React from "react";
import { AppBar, Container, Typography } from "@material-ui/core";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  const dancing = createTheme({
    typography: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
    },
  });
  return (
    <ThemeProvider theme={dancing}>
      <Container>
        <AppBar className={classes.appBar}>
          <Typography className={classes.heading} variant="h5">
            Bletchley-Park
          </Typography>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;
