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
import Typography from "@mui/material/Typography";
import { Paper } from "@material-ui/core";

export default function NestedList() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log(user?.result?._id);
    dispatch(getdashboard(user?.result?._id));
  }, []);
  const dashboard = useSelector((state) => state.dashboard);
  if (user?.result?.email == undefined) {
    return (
      <div className={classes.container}>
        <Typography variant="h6" align="center">
          Please Sign In to see your Dashboard.
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
            Your Crosswords
          </ListSubheader>
        }
      >
        <Button
          variant="contained"
          fullWidth
          className={classes.submit}
          onClick={() => {
            navigate("/form");
          }}
        >
          Create New Crossword
        </Button>
        {dashboard.map((data) => {
          return <DashboardFile title={data.title} words={data.words} crossid={data._id} />;
        })}
      </List>
    </div>
  );
}
