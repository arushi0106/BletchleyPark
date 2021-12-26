import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import { Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import CompeteItem from "./CompeteItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllContest } from "../../actions/contest";
import { useNavigate } from "react-router-dom";
const Compete = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();

  const newsfeed = useSelector((state) => state.newsfeed);
  React.useEffect(() => {
    dispatch(getAllContest());
  }, []);
  if (user?.result?.email == undefined) {
    return (
      <div className={classes.container}>
        <Typography variant="h6" align="center">
          Please Sign In to Compete
        </Typography>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Hone your crossword solving skills
          </ListSubheader>
        }
      >
        {newsfeed.map((data) => {
          return (
            <CompeteItem title={data.title} words={data.words} id={data._id} createuser={data.username} />
          );
        })}
        <Pagination count={10} />
      </List>
    </div>
  );
};

export default Compete;
