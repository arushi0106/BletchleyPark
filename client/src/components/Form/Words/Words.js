import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react/cjs/react.development";
const Words = ({
  count,
  setCrosswordInput,
  crosswordInput,
  setCount,
  words,
}) => {
  const clueLabel = `Clue ${count}`;
  const answerLabel = `Answer ${count}`;
  const [entered, setEntered] = useState(0);
  const [word, setWord] = useState({
    clue: "",
    answer: "",
  });
  return (
    <div>
      {entered === 0 ? (
        <TextField
          id="standard-full-width"
          fullWidth
          variant="outlined"
          label={`${clueLabel}`}
          placeholder="Red Fruit, Apple; The planet we live in, Earth"
          margin="normal"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setWord({
                ...word,
                clue: e.target.value,
              });
              console.log(crosswordInput);
              setEntered(entered + 1);
              if (entered === 2) {
                setCount(count + 1);
              }
            }
          }}
        />
      ) : (
        ``
      )}
      {entered === 1 ? (
        <TextField
          id="standard-full-width"
          fullWidth
          variant="outlined"
          label={`${answerLabel}`}
          placeholder="Red Fruit, Apple; The planet we live in, Earth"
          margin="normal"
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              if (/^[a-zA-Z]+$/.test(e.target.value)) {
                setCrosswordInput({
                  ...crosswordInput,
                  words: [
                    ...words,
                    { clue: word.clue, answer: e.target.value.toLowerCase() },
                  ],
                });
                console.log(crosswordInput);
                setEntered(0);
                setCount(count + 1);
              }
            }
          }}
        />
      ) : (
        ``
      )}
    </div>
  );
};

export default Words;
