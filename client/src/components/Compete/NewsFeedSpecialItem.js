import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider, Typography, ListItem, Avatar } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getContest } from "../../actions/contest";
import { useDispatch } from "react-redux";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const NewsFeedItem = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
    dispatch(getContest());
    navigate("/crossword");
  };
  const emphasis = createTheme({
    typography: {
      fontFamily: ["Moo Lah Lah", "cursive"].join(","),
    },
  });
  const whiteTheme = createTheme({
    palette: {
      primary: {
        main: teal[50],
      },
    },
  });
  return (
    <div className={classes.special}>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          secondary="
                  Time Left:
                  &nbsp; 1 day, 2hrs left
              "
          color="white"
        >
          <ThemeProvider theme={emphasis}>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h3"
            >
              Weekly Contest
            </Typography>
          </ThemeProvider>
        </ListItemText>
      </ListItemButton>

      <Divider variant="inset" component="li" />
    </div>
  );
};

export default NewsFeedItem;
