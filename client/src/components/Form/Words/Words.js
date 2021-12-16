import React from "react";
import { TextField, Alert, Button } from "@mui/material";
import { useState } from "react/cjs/react.development";
import { useDispatch } from "react-redux";
import { createCrossword } from "../../../actions/crossword";
const Words = ({
  title,
  count,
  setCrosswordInput,
  crosswordInput,
  setCount,
  // words,
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
  const dispatch = useDispatch();
  const [words, setWords] = useState([]);

  const [error, setError] = useState(-1);
  const SubmitForm = () => {
    console.log("submit");
    console.log(words);
    dispatch(
      createCrossword({
        words,title,
      })
    );
    //Words bhej de bus peeche
  };
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
                console.log(e.target.value);
                setWord({
                  answer: e.target.value.toLowerCase(),
                });
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
              setWord({
                ...word,
                clue: e.target.value,
              });
              setEntered(2);
            }
          }}
        />
      ) : (
        ``
      )}
      {entered === 2 ? (
        <Button
          onClick={() => {
            console.log(word);
            setWords([...words, word]);
            setEntered(0);
            console.log(words);
            setCount(count + 1);
          }}
        >
          AddMore
        </Button>
      ) : (
        ``
      )}
      <Button
        // className={classes.buttonSubmit}
        variant="contained"
        size="large"
        type="submit"
        onClick={SubmitForm}
        fullWidth
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

export default Words;
