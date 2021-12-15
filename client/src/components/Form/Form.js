import React, { useEffect, useState } from "react";
// import { TextField, Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
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
  useEffect(() => {
    console.log(crosswordInput);
  }, [count]);
  async function SubmitForm(event) {
    event.preventDefault();
    console.log("form submitted");
    console.log(crosswordInput);
    // dispatch(
    //   createCrossword({
    //     crosswordInput,
    //   })
    // );
  }

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
          <Typography variant="h6" align="center">
            {title}
          </Typography>
          {title === "Create your own Crossword" ? (
            <TextField
              id="standard-basic"
              label="Title"
              // value={title}
              placeholder="Adam & Eve"
              variant="outlined"
              fullWidth
              helperText="press enter"
              onKeyDown={(e) => {
                if (e.keyCode == 13) {
                  setCrosswordInput({
                    ...crosswordInput,
                    title: e.target.value,
                  });
                  setTitle(e.target.value);
                  setCount(count + 1);
                }
              }}
            />
          ) : (
            ``
          )}
          {title === "Create your own Crossword" ? (
            ``
          ) : (
            <div>
              {/* <FormControl margin="normal" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Accessibility
                </InputLabel>
                <Select
                  margin="normal"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Accessibility"
                  variant="outlined"
                  onChange={(e) =>
                    setCrosswordInput({
                      ...crosswordInput,
                      privacy: e.target.value,
                    })
                  }
                >
                  <MenuItem value="public">Public</MenuItem>
                  <MenuItem value="private">Private</MenuItem>
                </Select>
              </FormControl> */}
              {count === 0 ? (
                ``
              ) : (
                <Words
                  setCrosswordInput={setCrosswordInput}
                  crosswordInput={crosswordInput}
                  setCount={setCount}
                  count={count}
                  words={crosswordInput.words}
                />
              )}

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
            </div>
          )}
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Box>
  );
};
export default Form;
