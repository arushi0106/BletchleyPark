import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useStyles from "./styles.js";
import { Typography } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 1000 },
  {
    field: "time",
    headerName: "Time",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, name: "Jon", time: 35 },
  { id: 2, name: "Cersei", time: 42 },
  { id: 3, name: "Jaime", time: 45 },
  { id: 4, name: "Arya", time: 16 },
  { id: 5, name: "Daenerys", time: 55 },
  { id: 6, name: "Larry", time: 150 },
  { id: 7, name: "Ferrara", time: 44 },
  { id: 8, name: "Rossini", time: 36 },
  { id: 9, name: "Harvey", time: 65 },
];

export default function DataTable() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  if (user?.result?.email==undefined) {
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
