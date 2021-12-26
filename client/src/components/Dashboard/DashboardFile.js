import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useDispatch } from "react-redux";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {playCrossword} from "../../actions/playcrossword.js"
import { getleaderboard } from "../../actions/dashboard.js";
import { useNavigate } from "react-router-dom";

import { Divider, Typography, ListItem, Button } from "@mui/material";
import React, { useState } from "react";
const DashboardFile = ({ title ,words ,crossid }) => {
  const [open, setOpen] = useState(false);
  const navigate= useNavigate();
  const dispatch = useDispatch();
  let id=crossid;
  const user = JSON.parse(localStorage.getItem("profile"));
  let Userid=user.result._id;
  let Username=user.result.name;
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

  const ShowCrossword=()=>{
    dispatch(playCrossword({title,words,id,Userid,Username}));
    navigate("/crossword")
  }

  const ShowLeaderboard=()=>{
    console.log(id);
    dispatch(getleaderboard(id));
    navigate("/leaderboard");
  }

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
          <Button onClick={ShowCrossword}>show</Button>
          <Button onClick={ShowLeaderboard}>Leaderboard</Button>
        </List>
      </Collapse>
    </div>
  );
};

export default DashboardFile;
