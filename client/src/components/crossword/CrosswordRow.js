import { TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const CrosswordRow = (props) => {
  const classes = useStyles();
  const numrows = props.data.length;
  let rows = [];
  for (var j = 0; j < numrows; j++) {
    if (props.data[j] !== "-") {
      const x = j;
      let y = " ";
      // if (props.position[props.start][x] !== "") {
      //   y = props.position[props.start][x];
      // }
      rows.push(
        <input
          size="small"
          id="margin-none"
          className={classes.input}
          label={y}
          type="text"
          maxLength="1"
          onChange={(e) => {
            const newTable = props.table;
            newTable[props.start][x] = e.target.value.toLowerCase();
            props.setTable(newTable);
            props.setStatus(-1);
          }}
        />
      );
    } else
      rows.push(
        <input
          size="small"
          id="margin-none"
          readOnly
          // variant="outlined"
          label=" "
          // defaultValue={" "}
          className={classes.inputBlock}
          type="text"
          maxLength="1"
        />
      );
  }

  return <div>{rows}</div>;
};

export default CrosswordRow;
