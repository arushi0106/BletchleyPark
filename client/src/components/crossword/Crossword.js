import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import Timer from "./timer.js";
import { useSelector } from "react-redux";
import Clue from "./clue/Clue";
import useStyles from "./styles.js";

const Crossword = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const crossword = useSelector((state) => state.crossword);
  //Fetch this from backend:
  // let start = 5;
  let startTime;
  const [time, setTime] = React.useState(0);
  const [table, setTable] = React.useState([]);
  const [position, setPosition] = React.useState(crossword.positon);
  const [timerOn, setTimeOn] = React.useState(true);
  React.useEffect(() => {
    if (crossword.date == null) {
      startTime = 0;
    } else {
      let presentDate = new Date();
      console.log(presentDate);
      let startDate = crossword.date; //fetched date
      let currdate = new Date(crossword.date);
      console.log(currdate);
      console.log(presentDate.getTime());
      // console.log(startDate.getTime());
      startTime = presentDate.getTime() - currdate.getTime(); //(Time we received)
      console.log(startTime);

      console.log(crossword);
    }
    setTime(startTime);
    let l = crossword.table.length;
    let w = crossword.table[0].length;
    setTable(
      Array(l)
        .fill("-")
        .map(() => new Array(w).fill("-"))
    );
    setPosition(crossword.position);
    console.log(position);
  }, [crossword]);

  if (user?.result?.email == undefined) {
    return (
      <div className={classes.container}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own Crossword.
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Container className={classes.container}>
        <Timer
          time={time}
          setTime={setTime}
          timerOn={timerOn}
          setTimeOn={setTimeOn}
        />
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
