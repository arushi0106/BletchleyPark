import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import timer from "../models/timer.js";
import User from "../models/user.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  // console.log(req.body.user);
  // const layout = await clg.generateLayout(req.body.words);
  const mycrossword = new Crossword({
    title: req.body.title,
    privacy: "0",
    words: req.body.words,
    userid: req.body.user.result._id,
  });
  // console.log(req.body.user.result);
  // mycrossword.user.push(req.body.user.result._id);
  await mycrossword.save();
  // res.send(layout);
};

export const playCrossword = async (req, res) => {
  let date = new Date();

  console.log(date);

  let userid = req.body.Userid;
  let crossid = req.body.id;
  let words = req.body.words.map((w) => {
    return {
      answer: w.answer,
      clue: w.clue,
    };
  });
  const layout = await clg.generateLayout(words);
  let position = Array(layout.rows)
    .fill("")
    .map(() => new Array(layout.cols).fill(""));
  layout.result.map((res) => {
    position[res.starty - 1][res.startx - 1] = res.position;
  });
  layout.position = position;
  let time;
  timer.findOne({ userid: userid, crossid: crossid }, function (err, timers) {
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
      });
      mytime.save();
      console.log("elseif");
      layout.date = null;
      res.send(layout);
    } else {
      console.log("else");
      time = timers;
      console.log(time);
      layout.date = timers.startdate;
      layout._id = req.body.id;
      console.log(layout);
      res.send(layout);
      // return timers;
    }
  });
};

export const submitCrossword = async (req, res) => {
  console.log(req.body);
  let userid = req.body.userId;
  let crosswordid = req.body.crosswordId;
  let time = req.body.time;
  timer.findOneAndUpdate(
    { userid: userid, crossid: crosswordid },
    { $set: { totaltime: time } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    }
  );
  timer.find({ crossid: crosswordid }, function (err, timers) {
    if (err) {
      console.log("error");
      res.send("reached");
    } else {
      res.send(timers);
    }
  });
};
