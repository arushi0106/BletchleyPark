import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Divider, Typography, ListItem } from "@mui/material";
import React, { useState } from "react";
const DashboardFile = ({ title }) => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "Sreemoyee",
      time: "55 sec",
    },
    {
      name: "Sreemoyee",
      time: "55 sec",
    },
    {
      name: "Sreemoyee",
      time: "55 sec",
    },
  ];
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data.map((user) => {
            return (
              <ListItem>
                <ListItemText primary={user.name} secondary={user.time} />
              </ListItem>
            );
          })}

          <Divider variant="inset" component="li" />
        </List>
      </Collapse>
    </div>
  );
};

export default DashboardFile;
