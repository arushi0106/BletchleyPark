import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const MainText = ({ variant, text, className }) => {
  const classes = useStyles();
  const z = createTheme({
    typography: {
      fontFamily: ["Syncopate", "cursive"].join(","),
    },
  });
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <ThemeProvider theme={z}>
      <Typography
        data-aos="zoom-in-up"
        variant={variant}
        className={classes.special}
      >
        {text}
      </Typography>
    </ThemeProvider>
  );
};

export default MainText;
