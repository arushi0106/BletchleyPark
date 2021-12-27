import {
  Container,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CrosswordGrid from "./CrosswordGrid";
import Timer from "./timer.js";
import { useDispatch, useSelector } from "react-redux";
import Clue from "./clue/Clue";
import useStyles from "./styles.js";
import { getContest } from "../../actions/contest.js";
import{useNavigate} from "react-router-dom"
const Crossword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const crossword = useSelector((state) => state.crossword);
  let startTime;

  const [time, setTime] = React.useState(0);
  const [table, setTable] = React.useState([]);
  const [position, setPosition] = React.useState(crossword.positon);
  const [timerOn, setTimeOn] = React.useState(true);
  const navigate=useNavigate();
  const z = createTheme({
    typography: {
      fontFamily: ["Syncopate", "cursive"].join(","),
    },
  });

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
    navigate("/auth");
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
        <ThemeProvider theme={z}>
         {crossword.PreComplete?(<div className={classes.container}>
       <Typography variant="h6" align="center">
        You have already solved the Crossword
       </Typography>
     </div>):(< Timer
            time={time}
            setTime={setTime}
            timerOn={timerOn}
            setTimeOn={setTimeOn}
          />)} 
        </ThemeProvider>

        <Grid container alignItems="stretch" spacing={3}>
          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={12} md={9}>
            <CrosswordGrid
              table={table}
              setTable={setTable}
              position={position}
              setTimeOn={setTimeOn}
              time={time}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Clue />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Crossword;
