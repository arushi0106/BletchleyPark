import React, { useEffect, useState } from "react";
// import { TextField, Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import Select from "@mui/material/Select";
import { Grid, Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createCrossword } from "../../actions/crossword";
import useStyles from "./styles";
import Words from "./Words/Words";
import { hide } from "@popperjs/core";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [crosswordInput, setCrosswordInput] = useState({
    privacy: "public",
    words: [],
  });

  const [title, setTitle] = useState("Create your own Crossword");
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(0);
  const helperText = "press enter \u23CE";

  return (
    <Box action="post" noValidate autoComplete="off" className={classes.paper}>
      <Grid
        container
        className={`${classes.root} ${classes.form}`}
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
          <Typography>
            {crosswordInput.words.length > 0 ? "clue 1" : ``}
          </Typography>
          {title === "Create your own Crossword" ? (
            <TextField
              id="standard-basic"
              label="Title"
              // value={title}
              placeholder="Adam & Eve"
              variant="outlined"
              fullWidth
              helperText={`Give your crossword a title and ${helperText}`}
              onKeyDown={(e) => {
                if (e.keyCode == 13) {
                  setCrosswordInput({
                    ...crosswordInput,
                    title: e.target.value,
                  });
                  setTitle(e.target.value);
                  // setCount(count + 1);
                }
              }}
            />
          ) : (
            ``
          )}
          {title === "Create your own Crossword" || count !== 0 ? (
            ``
          ) : (
            <FormControl margin="normal" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Accessibility
              </InputLabel>
              <Select
                margin="normal"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Accessibility"
                variant="outlined"
                onChange={(e) => {
                  setCrosswordInput({
                    ...crosswordInput,
                    privacy: e.target.value,
                  });
                  setCount(count + 1);
                }}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
              <FormHelperText>
                Wanna hide your masterpiece from the world or show it off?
                Decide and {helperText}
              </FormHelperText>
            </FormControl>
          )}
          {count === 0 ? (
            ``
          ) : (
            <Words
            title={title}
              setCrosswordInput={setCrosswordInput}
              crosswordInput={crosswordInput}
              setCount={setCount}
              count={count}
              words={crosswordInput.words}
              helperText={helperText}
              showButton={showButton}
              setCrosswordInput={setShowButton}
            />
          )}
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Box>
  );
};
export default Form;
