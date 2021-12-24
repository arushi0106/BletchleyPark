import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./styles";
const MainText = () => {
  const classes = useStyles();
  const z = createTheme({
    typography: {
      fontFamily: ["Rock 3D", "cursive"].join(","),
    },
  });
  return (
    <ThemeProvider theme={z}>
      <Typography variant="h1" className={classes.special}>
        Welcome to Bletchley Park{" "}
      </Typography>
    </ThemeProvider>
  );
};

export default MainText;
