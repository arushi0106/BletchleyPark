import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles.js";

const Timer=()=> {
    const [time,setTime]=React.useState(0);
    const [timerOn,setTimeOn]=React.useState(false);
    React.useEffect(()=>{
        let interval=null;
        if(timerOn) {
            interval=setInterval(()=>{
                setTime(prevTime=>prevTime+10)},10);
            }
            else
            {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
            },[timerOn])
    return (
        <div>
        <div>
            <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span>{("0"+((time/10)%100)).slice(-2)}</span>
        </div>
        <div>
            <button onClick={()=>setTimeOn(true)}>Start</button>
            <button onClick={()=>setTimeOn(false)}>Stop</button>
            <button onClick={()=>setTimeOn(true)}>Resume</button>
            <button onClick={()=>setTime (0)}>Reset</button>
        </div>
        </div>
    );
}
export default Timer;
