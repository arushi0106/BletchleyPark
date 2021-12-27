import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getContest } from "../../actions/contest";
import { getleaderboard } from "../../actions/dashboard.js";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import MainText from "../HomePage/MainText";
const Contest = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Getcross = () => {
    dispatch(getContest());
    navigate("/crossword");
  };

  const ShowLeaderboard = () => {
    dispatch(getleaderboard("19760101"));
    navigate("/leaderboard");
  };

  return (
    <div className={classes.container}>
      <Grid container alignItems="stretch" spacing={3}>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={6}>
          <Container className={classes.container}>
            <MainText
              variant="h1"
              text="Welcome to the contest section"
              className={classes.special}
            />
          </Container>
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Container className={classes.container}>
            <MainText
              variant="h6"
              text="To Participate in the contest click here"
            />
            <Button
              onClick={Getcross}
              variant="contained"
              className={classes.submit}
            >
              Compete
            </Button>
          </Container>

          <Container className={classes.container}>
            <MainText variant="h6" text="Check the leaderboard from here" />
            <Button
              onClick={ShowLeaderboard}
              variant="contained"
              className={classes.submit}
            >
              Leaderboard
            </Button>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contest;
