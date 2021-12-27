import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useStyles from "./styles.js";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { submitCrossword } from "../../actions/playcrossword.js";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 1000 },
  {
    field: "time",
    headerName: "Time",
    type: "string",
    width: 90,
  },
];

export default function DataTable() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const leaderboard = useSelector((state) => state.dashleaderboard);
  console.log(leaderboard);
  const rows = leaderboard;
  console.log(leaderboard);
  if (user?.result?.email == undefined) {
    return (
      <div className={classes.container}>
        <Typography variant="h6" align="center">
          Please Sign In to see Leaderboard.
        </Typography>
      </div>
    );
  }
  return (
    <div style={{ height: 400, width: "100%" }} className={classes.container}>
      <Typography>Leaderboard</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
      />
    </div>
  );
}

// {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
//             {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
//             {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
