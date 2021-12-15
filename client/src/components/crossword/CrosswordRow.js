import React from "react";
import useStyles from "./styles";
const CrosswordRow = (props) => {
  const classes = useStyles();
  const numrows = props.data.length;
  let rows = [];
  for (var j = 0; j < numrows; j++) {
    if (props.data[j] !== "-")
      rows.push(
        <input
          // defaultValue={props.data[j]}
          className={classes.input}
          type="text"
          maxLength="1"
        />
      );
    else
      rows.push(
        <input
          readOnly
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
