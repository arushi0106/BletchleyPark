import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import create from "../images/create.png";
import practice from "../images/practice.jpg";
import compete from "../images/compete.png";
import friends from "../images/friends.jpg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const HomePage = () => {
  const classes = useStyles();
  const dancing = createTheme({
    typography: {
      fontFamily: ["Danc", "cursive"].join(","),
    },
  });
  return (
    <div>
      <Container className={classes.container}>
        <ThemeProvider theme={dancing}>
          <Typography variant="h1">Welcome to Bletchley Park </Typography>
        </ThemeProvider>
      </Container>
      <Container className={classes.container}>
        <Typography variant="h5">
          Scroll to know what all you can do here
        </Typography>
      </Container>
      <Container className={classes.container}>
        <Typography>
          1. Create your own crosswords, using your words and your own clues.
        </Typography>
        <img src={create} />
      </Container>
      <Container className={classes.container}>
        <Typography>
          2. Hone your crossword skills by practicing all the crosswords ever
          made here.{" "}
        </Typography>
        <img src={practice} />
      </Container>
      <Container className={classes.container}>
        <Typography>
          3. Compete with all the users in our weekly contests.
        </Typography>
        <img src={compete} />
      </Container>
      <Container className={classes.container}>
        <Typography>
          4. Have fun crossword solving sessions with your friends
        </Typography>
        <img src={friends} />
      </Container>
    </div>
  );
};

export default HomePage;
