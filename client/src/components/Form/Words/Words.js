import React, { useState } from "react";
import { TextField, Alert, Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { createCrossword } from "../../../actions/crossword";

const Words = ({
  title,
  count,
  setCrosswordInput,
  crosswordInput,
  setCount,
  words,
  setWords,
  helperText,
  showButton,
  setShowButton,
  submitHandler,
}) => {
  const dispatch = useDispatch();
  const clueLabel = `Clue ${count}`;
  const answerLabel = `Word ${count}`;
  const [entered, setEntered] = useState(0);
  const [word, setWord] = useState({
    clue: "",
    answer: "",
  });

  const [error, setError] = useState(-1);
  const SubmitForm = () => {
    // setWords([...words, word]);
    setEntered(0);
    setCount(count + 1);
    submitHandler();
  };
  const handleChange = (e) => {
    console.log(e);
    if (e.target.name === "answer") {
      setWord({ ...word, answer: e.target.value });
    } else {
      setWord({ ...word, clue: e.target.value });
    }
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
          name="answer"
          variant="outlined"
          label={`${answerLabel}`}
          placeholder="Apple"
          helperText={`Type a word (only letters allowed) and ${helperText}`}
          margin="normal"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              if (/^[a-zA-Z]+$/.test(e.target.value)) {
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
          name="clue"
          variant="outlined"
          label={`${clueLabel}`}
          placeholder="Red Fruit"
          margin="normal"
          helperText={`Give a clue for Word ${count} and ${helperText}`}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setWords([...words, word]);
              setWord([{}]);
              setEntered(2);
            }
          }}
        />
      ) : (
        ``
      )}
      {entered === 2 ? (
        <div>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              console.log(word);
              // setWords([...words, word]);
              setEntered(0);
              console.log(words);
              setCount(count + 1);
              // const x = words;
              // dispatch(createCrossword(x));
            }}
          >
            Add More Words?
          </Button>
          &nbsp; OR &nbsp;
          <Button
            // className={classes.buttonSubmit}
            variant="contained"
            size="large"
            type="submit"
            onClick={SubmitForm}
          >
            Create Crossword
          </Button>
        </div>
      ) : (
        ``
      )}
    </React.Fragment>
  );
};

export default Words;
