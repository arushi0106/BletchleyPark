import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import CrosswordRow from "./CrosswordRow";
import useStyles from "./styles";

const CrosswordGrid = () => {
  const classes = useStyles();
  const crossword = useSelector((state) => state.crossword);

  let rows = [];
  if (crossword.table && crossword.table.length > 0) {
    const numrows = crossword.table.length;
    const data = crossword.table[1];
    console.log(data);
    for (var i = 0; i < numrows; i++) {
      const data = crossword.table[i];
      rows.push(<CrosswordRow data={data} start={i} />);
    }
    console.log(crossword.table.length);
  }

  return (
    <Container elevation={3} className={classes.paper}>
      {rows}
    </Container>
  );
};

export default CrosswordGrid;
