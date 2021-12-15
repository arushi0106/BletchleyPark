import React from "react";
import { TextField, Alert } from "@mui/material";
import { useState } from "react/cjs/react.development";
const Words = ({
  count,
  setCrosswordInput,
  crosswordInput,
  setCount,
  words,
  helperText,
  showButton,
  setShowButton,
}) => {
  const clueLabel = `Clue ${count}`;
  const answerLabel = `Word ${count}`;
  const [entered, setEntered] = useState(0);
  const [word, setWord] = useState({
    clue: "",
    answer: "",
  });

  const [error, setError] = useState(-1);
  return (
    <React.Fragment>
      {error === 1 ? (
        <Alert severity="error">
          Please check your word! Only letters are acceptable
        </Alert>
      ) : (
        ``
      )}

      {entered === 0 ? (
        <TextField
          id="standard-full-width"
          fullWidth
          variant="outlined"
          label={`${answerLabel}`}
          placeholder="Apple"
          helperText={`Type a word (only letters allowed) and ${helperText}`}
          margin="normal"
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              if (/^[a-zA-Z]+$/.test(e.target.value)) {
                setWord({
                  answer: e.target.value.toLowerCase(),
                });
                console.log(word);
                setEntered(entered + 1);
                setError(-1);
              } else {
                setError(1);
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
          label={`${clueLabel}`}
          placeholder="Red Fruit"
          margin="normal"
          helperText={`Give a clue for Word ${count} and ${helperText}`}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setCrosswordInput({
                ...crosswordInput,
                words: [
                  ...words,
                  { answer: word.answer, clue: e.target.value },
                ],
              });
              console.log(crosswordInput);
              setEntered(0);
              setCount(count + 1);
            }
          }}
        />
      ) : (
        ``
      )}
    </React.Fragment>
  );
};

export default Words;
