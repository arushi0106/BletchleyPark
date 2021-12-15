import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import { useSelector } from "react-redux";
import Clue from "./clue/Clue";
import useStyles from "./styles.js";
// import Navbar from "../Navbar";

const Crossword = () => {
  const classes = useStyles();
  const crossword = useSelector((state) => state.crossword);

  const [table, setTable] = useState(
    Array(crossword.table.length)
      .fill("-")
      .map(() => new Array(crossword.table[0].length).fill("-"))
  );
  let position = Array(crossword.table.length)
    .fill("")
    .map(() => new Array(crossword.table[0].length).fill(""));
  crossword.result.map((res) => {
    position[res.startx - 1][res.starty - 1] = res.position;
  });
  console.log(position);
  return (
    <div>
      <Container className={classes.container}>
        <Grid container alignItems="stretch" spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={12} sm={4}>
            <CrosswordGrid
              table={table}
              setTable={setTable}
              position={position}
            />
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
