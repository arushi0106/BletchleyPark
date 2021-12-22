import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider, Typography, ListItem, Avatar } from "@mui/material";
import React, { useState } from "react";
const NewsFeedItem = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <Avatar
          // alt={user?.result.name}
          // src={user?.result.imageUrl}
          sx={{ mr: 2 }}
        >
          A
        </Avatar>
        <ListItemText primary="Fruits" />
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
                    &nbsp; Arushi Agarwal, 5 minutes ago
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
                  Solved By:
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    &nbsp; 256
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Collapse>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default NewsFeedItem;
