import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles.js";

<<<<<<< HEAD
const Timer = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimeOn] = React.useState(true);
    React.useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn])
    return (
        <div>
            <div>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                {/* <button onClick={()=>setTimeOn(true)}>Start</button>
            <button onClick={()=>setTimeOn(false)}>Stop</button>
            <button onClick={()=>setTimeOn(true)}>Resume</button>
            <button onClick={()=>setTime (0)}>Reset</button> */}
            </div>
        </div>
    );
}
=======
const Timer = ({ time, timerOn, setTimeOn, setTime }) => {
  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div>
      <h1>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h1>
    </div>
  );
};
>>>>>>> cd74a3d6701a91655760b06cc7ba8905ed06d40a
export default Timer;
