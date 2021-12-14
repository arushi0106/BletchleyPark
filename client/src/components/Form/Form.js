import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { Grid, Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createCrossword } from "../../actions/crossword";
import useStyles from "./styles";
import Navbar from "../Navbar";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [clue, setClue] = useState("");

  async function SubmitForm(event) {
    event.preventDefault();
    console.log("form submitted");
    console.log(title);
    console.log(clue);
    dispatch(
      createCrossword({
        title,
        clue,
      })
    );
  }

  return (
    <Box action="post" noValidate autoComplete="off">
      <Navbar />
      <Grid
        container
        className={classes.mainContainer}
        justify="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Create your own Crossword</Typography>
          <TextField
            id="standard-basic"
            label="Title"
            value={title}
            placeholder="Adam & Eve"
            variant="outlined"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="standard-full-width"
            variant="outlined"
            label="Clue & Answer"
            placeholder="Red Fruit, Apple; The planet we live in, Earth"
            fullWidth
            margin="normal"
            value={clue}
            onChange={(e) => setClue(e.target.value)}
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            size="large"
            type="submit"
            onClick={SubmitForm}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
};
export default Form;
