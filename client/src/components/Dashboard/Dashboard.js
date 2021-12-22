import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import React from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DashboardFile from "./DashboardFile";
// import { getnewsfeed } from "../../../../server/controllers/newsfeed";
import {getnewsfeed} from "../../actions/newsfeed.js"
import {getdashboard} from "../../actions/dashboard"

export default function NestedList() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const dispatch = useDispatch();
 
  React.useEffect(() => {
    console.log(user);
    dispatch(getdashboard({user}));
   
  }, []);
  const newsfeed = useSelector((state) => state.newsfeed);
  const titles = ["Fruits", "Adam & Eve", "Singers"];
  return (
    <div className={classes.container}>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Your Crosswords
          </ListSubheader>
        }
      >
        {newsfeed.map((data) => {
          return <DashboardFile title={data.title} />;
        })}
      </List>
    </div>
  );
}
