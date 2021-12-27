import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
    navigate("/contest");
  };
  const emphasis = createTheme({
    typography: {
      fontFamily: ["Moo Lah Lah", "cursive"].join(","),
    },
  });

  return (
    <div className={classes.special}>
      <ListItemButton onClick={handleClick}>
        <ListItemText>
          <ThemeProvider theme={emphasis}>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h3"
            >
              Click here to solve the Weekly Contest
            </Typography>
          </ThemeProvider>
        </ListItemText>
      </ListItemButton>

      <Divider variant="inset" component="li" />
    </div>
  );
};

export default NewsFeedItem;
