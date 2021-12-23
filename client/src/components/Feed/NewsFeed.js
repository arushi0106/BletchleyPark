import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider, Typography, ListItem, Avatar} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import NewsFeedItem from "./NewsFeedItem";
import NewsFeedSpecialItem from "./NewsFeedSpecialItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getnewsfeed } from "../../actions/newsfeed.js";
import { useNavigate } from "react-router-dom";
const NewsFeed = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();

  const newsfeed = useSelector((state) => state.newsfeed);
  React.useEffect(() => {
    dispatch(getnewsfeed());
  }, [newsfeed]);
  if (user?.result?.email==undefined) {
    return (
      <div className={classes.container}>
        <Typography variant="h6" align="center">
          Please Sign In to see your Newsfeed.
        </Typography>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Hone your crossword solving skills
          </ListSubheader>
        }
      >
        <NewsFeedSpecialItem />
        {newsfeed.map((data) => {
          return <NewsFeedItem title={data.title} words={data.words} />;
        })}

      </List>
    </div>
  );
};

export default NewsFeed;
