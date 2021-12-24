import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import CrosswordRow from "./CrosswordRow";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { submitCrossword } from "../../actions/playcrossword";
import { Navigate } from "react-router-dom";

const CrosswordGrid = ({ table, setTable, position, setTimeOn, time }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const crossword = useSelector((state) => state.crossword);
  let rows = [];

  const [status, setStatus] = useState(-1);
  if (crossword.table && crossword.table.length > 0) {
    const numrows = crossword.table.length;
    for (var i = 0; i < numrows; i++) {
      const data = crossword.table[i];
      rows.push(
        <CrosswordRow
          data={data}
          start={i}
          table={table}
          setTable={setTable}
          position={position}
          setStatus={setStatus}
        />
      );
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    for (var i = 0; i < crossword.table.length; i++) {
      for (var j = 0; j < crossword.table[i].length; j++) {
        if (table[i][j] !== crossword.table[i][j]) {
          setStatus(0);
          return;
        }
      }
    }
    setTimeOn(false);
    let data = {
      time: time,
      userId: user.result._id,
      crosswordId: crossword._id,
    };
    dispatch(submitCrossword(data));
    setStatus(1);
    Navigate("/leaderboard");
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      elevation={3}
      className={classes.paper}
    >
      {rows}
      <Button onClick={submitHandler}>Check</Button>
      {status === 1 ? (
        <Alert
          oseverity="success"
          onClose={() => {
            setStatus(-1);
          }}
        >
          Damn! Its Correct
        </Alert>
      ) : (
        ``
      )}

      {status === 0 ? (
        <Alert
          severity="error"
          onClose={() => {
            setStatus(-1);
          }}
        >
          Wrong Submission
        </Alert>
      ) : (
        ``
      )}
    </Box>
  );
};

export default CrosswordGrid;
