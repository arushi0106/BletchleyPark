import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import CrosswordRow from "./CrosswordRow";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { submitCrossword } from "../../actions/playcrossword";
import { Navigate } from "react-router-dom";
import Recaptcha from "react-recaptcha";
const CrosswordGrid = ({ table, setTable, position, setTimeOn, time }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const crossword = useSelector((state) => state.crossword);
  let rows = [];
  const [isVerified, setVerified] = React.useState(false);
  const [captcha, setcaptcha] = React.useState(false);
  const [status, setStatus] = useState(-1);
  if (crossword.table && crossword.table.length > 0) {
    const numrows = crossword.table.length;
    for (var i = 0; i < numrows; i++) {
      const data = crossword.table[i];
      rows.push(
        <CrosswordRow
          data={data}
          start={i}
          table={table}
          setTable={setTable}
          position={position}
          setStatus={setStatus}
        />
      );
    }
  }
  const verifyResponse = (response) => {
    if (response) {
      setVerified(true);
      setcaptcha(false);
      setTimeOn(false);
      let data = {
        time: time,
        userId: user.result._id,
        crosswordId: crossword._id,
      };
      dispatch(submitCrossword(data));
      setStatus(1);
    } else setVerified(false);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);

    for (var i = 0; i < crossword.table.length; i++) {
      for (var j = 0; j < crossword.table[i].length; j++) {
        if (table[i][j] !== crossword.table[i][j]) {
          setStatus(0);
          return;
        }
      }
    }

    alert("Please Verify Yourself");
    setcaptcha(true);
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      elevation={3}
      className={classes.paper}
    >
      {rows}
      <Button
        variant="contained"
        className={classes.submit}
        onClick={SubmitHandler}
      >
        Check
      </Button>
      {captcha ? (
        <div>
          <Recaptcha
            sitekey="6Lfwvs0dAAAAAI3dc3Y0EEhA1-YotYi1fz7p9I1a"
            render="explicit"
            onloadCallback={() => console.log("recaptcha loaded successfully")}
            verifyCallback={verifyResponse}
          />
        </div>
      ) : (
        <div></div>
      )}
      {status === 1 ? (
        <Alert
          oseverity="success"
          onClose={() => {
            setStatus(-1);
          }}
        >
          Oh Damn! Its Correct
        </Alert>
      ) : (
        ``
      )}

      {status === 0 ? (
        <Alert
          severity="error"
          onClose={() => {
            setStatus(-1);
          }}
        >
          Wrong Submission
        </Alert>
      ) : (
        ``
      )}
    </Box>
  );
};

export default CrosswordGrid;
