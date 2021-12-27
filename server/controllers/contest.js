import cron from "node-cron";
import fetch from "node-fetch";
import mongoose from "mongoose";
import clg from "crossword-layout-generator";
import Crossword from "../models/crossword.js";
import mydate from "../models/contest.js";
import timer from "../models/timer.js";
import { mailer } from "../nodemailer/nodemailer.js";
import User from "../models/user.js";
let url =
  "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/1976/01/01.json";
let Cdate = new Date("Sun Dec 26 2021 00:00:00 GMT+0530 (India Standard Time)");
let year = 1976;
let month = "01";
let day = "01";
cron.schedule("0 0 * * 0", async function () {
  Cdate = new Date();
  url =
    "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/" +
    year +
    "/" +
    month +
    "/" +
    day +
    ".json";
  const mycrossword = new Crossword({
    title: url,
    privacy: "0",
    words: [],
    userid: "admin",
    username: "admin",
    isContest: true,
  });

  await mycrossword.save();
  await User.find({}, function (err, users) {
    users.forEach((user) => mailer("contest", user));
  });
});

export const getAllContest = (req, res) => {
  let cross;
  Crossword.find({ isContest: true }, function (err, Crosswords) {
    if (err) {
      cross = "error";
    } else {
      cross = Crosswords;
      res.send(cross);
    }
  });
};

export const getContest = async (req, res) => {
  // const date = new Date();
  mailer("contest", "mithi.basu09@gmail.com");
  const response = await fetch(url);
  var data = await response.json();
  const l = data.size.cols;
  const w = data.size.rows;
  let layout = {};
  let table = [];
  let position = [];
  for (let i = 0; i < l; i++) {
    let row = [],
      pos = [];
    for (let j = 0; j < w; j++) {
      row.push(data.grid[i * l + j]);
      if (data.gridnums[i * l + j] != 0) {
        pos.push(data.gridnums[i * l + j]);
      } else {
        pos.push("");
      }
    }
    table.push(row);
    position.push(pos);
  }
  let result = [];
  for (let i = 0; i < data.clues.across.length; i++) {
    let temp = data.clues.across[i].split(". ");

    result.push({
      clue: temp[1],
      position: temp[0],
      orientation: "across",
    });
  }
  for (let i = 0; i < data.clues.down.length; i++) {
    let temp = data.clues.down[i].split(". ");

    result.push({
      clue: temp[1],
      position: temp[0],
      orientation: "down",
    });
  }
  layout.table = table;
  layout.rows = w;
  layout.cols = l;
  layout.position = position;
  layout.result = result;
  console.log(table);
  console.log(result);
  layout.date = Cdate;
  layout._id = year + month + day;
  layout.isContest = true;
  res.send(layout);
};
