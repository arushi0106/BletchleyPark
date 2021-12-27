import React, { useEffect, useState } from "react";
// import { TextField, Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { Container, FormHelperText } from "@mui/material";
import Select from "@mui/material/Select";
import { Grid, Box, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createCrossword } from "../../actions/crossword";
import useStyles from "./styles";
import Words from "./Words/Words";
import { hide } from "@popperjs/core";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  Typography,
  Button,
} from "@material-ui/core";

const Form = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [accessibiliy, setAccessibiliy] = useState();
  const [title, setTitle] = useState("Create your own Crossword");
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(0);
  const [words, setWords] = useState([]);
  const helperText = "press enter \u23CE";
  const submitHandler = () => {
    console.log(user);
    dispatch(createCrossword({ words, title, accessibiliy, user }));
    history("/dashboard");
  };
  const z = createTheme({
    typography: {
      fontFamily: ["Syncopate", "cursive"].join(","),
    },
  });
  const submitTitle = (e) => {
    if (e.keyCode == 13) {
      setTitle(e.target.value);
      // setCount(count + 1);
    }
  };
  const submitAccessibility = (e) => {
    setAccessibiliy(e.target.value);
    setCount(count + 1);
  };
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
          <ThemeProvider theme={z}>
            <Typography variant="h6" className={classes.text}>
              {title}
            </Typography>
          </ThemeProvider>

          {title === "Create your own Crossword" ? (
            <TextField
              id="standard-basic"
              label="Title"
              placeholder="Adam & Eve"
              variant="outlined"
              fullWidth
              helperText={`Give your crossword a title and ${helperText}`}
              onKeyDown={submitTitle}
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
                label="Accessibility"
                variant="outlined"
                onChange={submitAccessibility}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
              <FormHelperText>
                Wanna hide your masterpiece from the world or show it off?
              </FormHelperText>
            </FormControl>
          )}
          {count === 0 ? (
            ``
          ) : (
            <Words
              setCount={setCount}
              count={count}
              helperText={helperText}
              showButton={showButton}
              words={words}
              setWords={setWords}
              submitHandler={submitHandler}
            />
          )}
          <Typography>
            {words.length > 0 ? (
              <Container>
                {words.map((word) => (
                  <Grid>
                    {word.answer} &nbsp; : &nbsp; {word.clue}
                  </Grid>
                ))}
              </Container>
            ) : (
              ``
            )}
          </Typography>
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Box>
  );
};
export default Form;
