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

// const rows = [
//   { id: 1, name: "Jon", time: 35 },
//   { id: 2, name: "Cersei", time: 42 },
//   { id: 3, name: "Jaime", time: 45 },
//   { id: 4, name: "Arya", time: 16 },
//   { id: 5, name: "Daenerys", time: 55 },
//   { id: 6, name: "Larry", time: 150 },
//   { id: 7, name: "Ferrara", time: 44 },
//   { id: 8, name: "Rossini", time: 36 },
//   { id: 9, name: "Harvey", time: 65 },
// ];

// const rows=[{
//   _id: "61c5b4dec83e0e32457f3308",
//   starttime: '0',
//   startdate: 'Fri Dec 24 2021 17:24:05 GMT+0530 (India Standard Time)',
//   totaltime: '121837',
//   userid: '61bc22d2cf3bb6f850dcfb41',
//   crossid: '61bb6c79a23e042346884245',
//   Username: 'arushi agarwal',
//   __v: 0
// }]

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
        checkboxSelection
      />
    </div>
  );
}
