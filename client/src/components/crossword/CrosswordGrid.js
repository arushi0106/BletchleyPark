import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Container } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import CrosswordRow from "./CrosswordRow";
import useStyles from "./styles";

const CrosswordGrid = ({ table, setTable, position,setTimeOn, time }) => {
  const classes = useStyles();
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
    console.log(crossword.table.length);
  }
  const submitHandler = () => {
    console.log(table);
    console.log(crossword.table);
    for (var i = 0; i < crossword.table.length; i++) {
      for (var j = 0; j < crossword.table[i].length; j++) {
        if (table[i][j] !== crossword.table[i][j]) {
          console.log("err");
          setStatus(0);
          
          return;
        }
      }
    }
    console.log(time); //Send this to backend on correct
    setTimeOn(false);
    setStatus(1);
  };
  return (
    <Container elevation={3} className={classes.paper}>
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
    </Container>
  );
};

export default CrosswordGrid;
