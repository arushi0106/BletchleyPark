import React from "react";
import { useSelector } from "react-redux";
import CrosswordRow from "./CrosswordRow";

const CrosswordGrid = () => {
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

  return <div>{rows}</div>;
};

export default CrosswordGrid;
