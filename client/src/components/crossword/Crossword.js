import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCrossword } from "../../actions/crossword";
import CrosswordGrid from "./CrosswordGrid";
import Clue from "./clue/Clue";
// import Navbar from "../Navbar";

const Crossword = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Grid container alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <CrosswordGrid />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Clue />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Crossword;
