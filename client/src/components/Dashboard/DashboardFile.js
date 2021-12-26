import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useDispatch } from "react-redux";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { playCrossword } from "../../actions/playcrossword.js";
import { getleaderboard } from "../../actions/dashboard.js";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles.js";
import { Divider, Button } from "@material-ui/core";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { ListItem } from "@mui/material";
const DashboardFile = ({ title, words, crossid, solved }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let id = crossid;
  const user = JSON.parse(localStorage.getItem("profile"));
  let Userid = user.result._id;
  let Username = user.result.name;
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  const z = createTheme({
    typography: {
      fontFamily: ["Syncopate", "cursive"].join(","),
    },
  });
  const ShowCrossword = () => {
    dispatch(playCrossword({ title, words, id, Userid, Username, solved }));
    navigate("/crossword");
  };

  const ShowLeaderboard = () => {
    console.log(id);
    dispatch(getleaderboard(id));
    navigate("/leaderboard");
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem>
            <ThemeProvider theme={z}>
              <Button onClick={ShowCrossword} className={classes.submit}>
                show
              </Button>
              <Button onClick={ShowLeaderboard} className={classes.submit}>
                Leaderboard
              </Button>
            </ThemeProvider>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Collapse>
    </div>
  );
};

export default DashboardFile;
