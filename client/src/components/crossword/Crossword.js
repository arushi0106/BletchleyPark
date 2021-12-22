import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import Timer from "./timer.js"
import { useSelector } from "react-redux";
import Clue from "./clue/Clue";
import useStyles from "./styles.js";

const Crossword = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  //Fetch this from backend: 
  let start = 5;
  let startTime;
  if (start == null) {
    startTime = 0;
  }
  else {
    let presentDate = new Date();
    let startDate = new Date(presentDate - 24 * 60 * 60 * 1000); //fetched date
    startTime = new Date(presentDate - startDate).getTime() //(Time we received)
  }
  const [time, setTime] = React.useState(startTime);
  const [timerOn, setTimeOn] = React.useState(true);
  const crossword = useSelector((state) => state.crossword);
  console.log(crossword);
  while (!crossword.table) {
   ; 
  }


    let l = crossword.table.length;
    let w = crossword.table[0].length;
    const [table, setTable] = useState(
      Array(l)
        .fill("-")
        .map(() => new Array(w).fill("-"))
    );

    let position = Array(l)
      .fill("")
      .map(() => new Array(w).fill(""));
    crossword.result.map((res) => {
      position[res.startx - 1][res.starty - 1] = res.position;
    });
    if (!user?.result?.name) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own Crossword.
          </Typography>
        </Paper>
      );
    }

    return (
      <div>
        <Container className={classes.container}>

          <Timer time={time} setTime={setTime} timerOn={timerOn} setTimeOn={setTimeOn} />
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={2}></Grid>
            <Grid item xs={12} md={4}>
              <CrosswordGrid
                table={table}
                setTable={setTable}
                position={position}
                setTimeOn={setTimeOn}
                time={time}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Clue />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default Crossword;
