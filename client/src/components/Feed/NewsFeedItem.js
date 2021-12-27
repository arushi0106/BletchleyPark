import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
// import { Button } from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider, Typography, ListItem, Avatar } from "@mui/material";
import React, { useState } from "react";
import { Button, ThemeProvider, createTheme } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { playCrossword } from "../../actions/playcrossword.js";
import { getleaderboard } from "../../actions/dashboard.js";
import { useNavigate } from "react-router-dom";
const NewsFeedItem = ({ title, words, id, createuser, solved }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  let Userid = user.result._id;
  let Username = user.result.name;
  const z = createTheme({
    typography: {
      fontFamily: ["Syncopate", "cursive"].join(","),
    },
  });
  // console.log(user);
  const handleClick = () => {
    setOpen(!open);
  };

  const Playcross = () => {
    dispatch(playCrossword({ title, words, id, Userid, Username, solved }));
    navigate("/crossword");
  };

  const ShowLeaderboard = () => {
    dispatch(getleaderboard(id));
    navigate("/leaderboard");
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <Avatar
          // alt={user?.result.name}
          // src={user?.result.imageUrl}
          sx={{ mr: 2 }}
        >
          {createuser ? createuser.charAt(0) : "-"}
        </Avatar>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemText
              primary={
                <React.Fragment>
                  Created By:
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    &nbsp; {createuser}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <React.Fragment>
                  Difficult Level:
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    &nbsp; Easy
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <React.Fragment>
                  Attempted By:
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    &nbsp; {solved}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ThemeProvider theme={z}>
              <Button onClick={Playcross} className={classes.submit}>
                play
              </Button>

              <Button onClick={ShowLeaderboard} className={classes.submit}>
                Leaderboard
              </Button>
            </ThemeProvider>
          </ListItem>
        </List>
      </Collapse>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default NewsFeedItem;
