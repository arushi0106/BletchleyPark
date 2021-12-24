import { TextField, Box } from "@mui/material";
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
      if (props.positon && props.position[props.start][x] !== "") {
        y = props.position[props.start][x];
      }
      rows.push(
        <TextField
          id="outlined-read-only-input"
          // defaultValue="Hello World"
          size="small"
          id="margin-none"
          className={classes.input}
          variant="outlined"
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
        <TextField
          disabled
          id="outlined-disabled"
          size="small"
          id="margin-none"
          // className={classes.input}
          variant="filled"
          label="Disabled"
          id="margin-none"
          // variant="outlined"
          label=" "
          // defaultValue={" "}
          className={classes.inputBlock}
          type="text"
          maxLength="1"
        />
      );
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      {rows}
    </Box>
  );
};

export default CrosswordRow;
