import React from "react";
import { useSelector } from "react-redux";

const Clue = () => {
  const crossword = useSelector((state) => state.crossword);
  const clues = crossword.result;
  let down = [],
    across = [];
  if (clues) {
    for (var i = 0; i < clues.length; i++) {
      if (clues[i].orientation === "down") {
        down.push(<p>{clues[i].clue}</p>);
      } else {
        across.push(<p>{clues[i].clue}</p>);
      }
    }
  }
  return (
    <div>
      {down}
      {across}
    </div>
  );
};

export default Clue;
