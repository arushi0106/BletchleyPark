import cron from "node-cron";
import fetch from "node-fetch";
import mongoose from "mongoose";
import clg from "crossword-layout-generator";
import nodemailer from "nodemailer";
import Crossword from "../models/crossword.js";

let url =
  "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/1976/01/01.json";
let year = 1976,
  month = "01",
  day = "01";

// Scheduler to automatically create new contests as a week ends
cron.schedule("0 0 * * 0", async function () {
  year++;
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

  // let mailTransporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true, // use TLS
  //   auth: {
  //     user: "bletchleypark@gmail.com",
  //     pass: process.env.PASSWORD,
  //   },
  // });

  // let mailDetails = {
  //   to: to.email,
  //   subject: "Bletchley Park | Weekly Contest",
  //   html: "We invite you to participate in our weekly contest. Go to http://localhost:3000 to compete now.",
  // };

  // mailTransporter.sendMail(mailDetails, function (err, data) {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
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
  res.send(layout);
};
