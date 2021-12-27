import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getContest } from "../../actions/contest";
import { getleaderboard } from "../../actions/dashboard.js";
import { useNavigate } from "react-router-dom";
const   Contest = ()=>{
    const user = JSON.parse(localStorage.getItem("profile"));
  // const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   dispatch(getContest());
  // }, []);
    const  Getcross = ()=>{
      dispatch(getContest())
        navigate("/crossword");
    }

    const ShowLeaderboard=()=>{
      // console.log(id);
      dispatch(getleaderboard("contest"));
      navigate("/leaderboard");
    }

return(<div><button onClick={Getcross}>contest</button>
  <button onClick={ShowLeaderboard}>Leaderboard</button></div>)
  };

  export default Contest;

