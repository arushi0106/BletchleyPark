import React from "react";
import { useSelector } from "react-redux";
import { Button, Container } from "@material-ui/core";
import CrosswordRow from "./CrosswordRow";
import useStyles from "./styles";

const CrosswordGrid = ({ table, setTable, position }) => {
  const classes = useStyles();
  const crossword = useSelector((state) => state.crossword);
  let rows = [];
  if (crossword.table && crossword.table.length > 0) {
    const numrows = crossword.table.length;

    const data = crossword.table[1];
    console.log(data);
    for (var i = 0; i < numrows; i++) {
      const data = crossword.table[i];
      rows.push(
        <CrosswordRow
          data={data}
          start={i}
          table={table}
          setTable={setTable}
          position={position}
        />
      );
    }
    console.log(crossword.table.length);
  }
  const submitHandler = () => {
    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        if (table[i][j] !== crossword.table[i][j]) {
          console.log("wronf");
          return;
        }
      }
    }
    console.log("corr");
  };
  return (
    <Container elevation={3} className={classes.paper}>
      {rows}
      <Button onClick={submitHandler}>hei</Button>
    </Container>
  );
};

export default CrosswordGrid;
