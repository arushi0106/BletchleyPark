import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles.js";

const Timer=({time,timerOn,setTimeOn,setTime})=> {
    
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
        
            <h1><span>{("0"+Math.floor((time/3600000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span>{("0"+((time/10)%100)).slice(-2)}</span></h1>
        
        </div>
    );
}
export default Timer;
