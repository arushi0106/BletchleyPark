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
import NewsFeedItem from "./NewsFeedItem";
import NewsFeedSpecialItem from "./NewsFeedSpecialItem";

const NewsFeed = () => {
  const classes = useStyles();

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
        <NewsFeedItem />
        <NewsFeedItem />
        <NewsFeedItem />
      </List>
    </div>
  );
};

export default NewsFeed;
