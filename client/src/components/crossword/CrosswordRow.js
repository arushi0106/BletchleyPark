import React from "react";

const CrosswordRow = (props) => {
  const numrows = props.data.length;
  let rows = [];
  for (var j = 0; j < numrows; j++) {
    if (props.data[j] !== "-")
      rows.push(
        <input
          defaultValue={props.data[j]}
          //   className={styles.input}
          type="text"
          maxLength="1"
        />
      );
    else
      rows.push(
        <input
          readOnly
          //   className={styles.inputBlock}
          type="text"
          maxLength="1"
        />
      );
  }

  return <div>{rows}</div>;
};

export default CrosswordRow;
