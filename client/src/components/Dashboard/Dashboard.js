import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import React from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DashboardFile from "./DashboardFile";
import { getdashboard } from "../../actions/dashboard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NestedList() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log(user.result._id);
    dispatch(getdashboard(user.result._id));
  }, []);
  const dashboard = useSelector((state) => state.dashboard);

  return (
    <div className={classes.container}>
      <Button
        onClick={() => {
          navigate("/form");
        }}
      >
        Create New Crossword
      </Button>
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
        {dashboard.map((data) => {
          return <DashboardFile title={data.title} />;
        })}
      </List>
    </div>
  );
}
