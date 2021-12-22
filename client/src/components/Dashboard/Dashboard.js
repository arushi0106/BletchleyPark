import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import React from "react";
import useStyles from "./styles";
import DashboardFile from "./DashboardFile";

export default function NestedList() {
  const classes = useStyles();
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
        {titles.map((title) => {
          return <DashboardFile title={title} />;
        })}
      </List>
    </div>
  );
}
