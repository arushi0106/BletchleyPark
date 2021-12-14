import React from "react";

import { useSelector } from "react-redux";
import useStyles from "./styles";

import { Card, CardContent, Typography } from "@material-ui/core";

const Clue = () => {
  const crossword = useSelector((state) => state.crossword);
  const clues = crossword.result;

  const classes = useStyles();
  let down = [],
    across = [];
  if (clues) {
    for (var i = 0; i < clues.length; i++) {
      if (clues[i].orientation === "down") {
        down.push(
          <p>
            {i + 1}. {clues[i].clue}
          </p>
        );
      } else {
        across.push(
          <p>
            {i + 1}. {clues[i].clue}
          </p>
        );
      }
    }
  }
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">Across</Typography>
          <Typography variant="p" className={classes.cardBody}>
            {across}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">Down</Typography>
          <Typography variant="p" className={classes.cardBody}>
            {down}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clue;
