import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import timer from "../models/timer.js";
import User from "../models/user.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {    // creation of crossword schema when a user create crossword
  const mycrossword = new Crossword({
    title: req.body.title,
    privacy: "0",
    words: req.body.words,
    userid: req.body.user.result._id,
    username: req.body.user.result.name,
  });

  await mycrossword.save();
};

export const playCrossword = async (req, res) => {    //when user wants to play a crossword
  let date = new Date();      

  // console.log(date);
  // console.log(req.body);

  let userid = req.body.Userid;
  let crossid = req.body.id;
  let title = req.body.title;
  let Username = req.body.Username;
  let solved = req.body.solved;
  let words = req.body.words.map((w) => {
    return {
      answer: w.answer,
      clue: w.clue,
    };
  });
  const layout = await clg.generateLayout(words);     //layout generated
  console.log(layout);
  let position = Array(layout.rows)
    .fill("")
    .map(() => new Array(layout.cols).fill(""));
  layout.result.map((res) => {
    if (res.orientation != "none")
      position[res.starty - 1][res.startx - 1] = res.position;
  });
  layout.position = position;
  layout.title = title;
  // layout.username = Username;
  let time;
  let PreComplete = false;
  timer.findOne({ userid: userid, crossid: crossid }, function (err, timers) {    //check if user has already opened the crossword before
    if (err) {
      time = "error";
      console.log("if");
    } else if (!timers) {
      time = "0";
      const mytime = new timer({
        startdate: date,
        starttime: "0",
        totaltime: "0",
        userid: userid,
        crossid: crossid,
        Username: Username,
      });
      mytime.save();
      Crossword.findOneAndUpdate(       // chn=anging the number of user who have attempted the crossword
        { _id: crossid },
        { $set: { solved: solved + 1 } },
        { new: true },
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          console.log(doc);
        }
      );
      layout.date = null;
      layout._id = req.body.id;
      layout.PreComplete = PreComplete;
      res.send(layout);
    } else {
      time = timers;
      console.log(time);
      if (time.complete == true) PreComplete = true;
      layout.date = timers.startdate;
      layout._id = req.body.id;
      layout.PreComplete = PreComplete;
      res.send(layout);
    }
  });
};

export const submitCrossword = async (req, res) => {      //when submission made by user is correct
  console.log(req.body);
  let userid = req.body.userId;
  let username = req.body.userName;
  let crosswordid = req.body.crosswordId;
  let time = req.body.time;
  let isContest = req.body.isContest;
  console.log(isContest);
  if (!isContest) {     // run when the given crossword is not the part of contest
    timer.findOneAndUpdate(
      { userid: userid, crossid: crosswordid },
      { $set: { totaltime: time, complete: true } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
      }
    );

    timer.find({ crossid: crosswordid }, function (err, timers) {
      if (err) {
        console.log("error");
        res.send("reached");
      } else {
        const t = timers.map(function (row) {
          return {
            id: row._id,
            name: row.Username,
            time: row.totaltime,
          };
        });

        console.log(t);
        res.send(t);        //t contain list of user to be sended to frontend for leaderboard
      }
    });
  } else {
    const mytime = new timer({
      startdate: null,
      starttime: "0",
      totaltime: time,
      userid: userid,
      crossid: crosswordid,
      Username: username,
      complete: true,
    });
    mytime.save();
    console.log(mytime);
    res.send("submitted");
  }
};
