import { Container, Grid } from "@material-ui/core";
import React from "react";
import CrosswordGrid from "./CrosswordGrid";
import Clue from "./clue/Clue";
// import Navbar from "../Navbar";

const Crossword = () => {
  return (
    <div>
      <Container>
        <Grid container alignItems="stretch" spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={12} sm={4}>
            <CrosswordGrid />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Clue />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Crossword;
