import Crossword from "../models/crossword.js";
import timer from "../models/timer.js";

export const getdashboard = (req, res) => {
  Crossword.find({ userid: req.params.id }, function (err, Crosswords) {
    if (err) {
      cross = "error";
    } else if (!Crosswords) {
      cross = "no crossword";
    } else {
      res.send(Crosswords);
    }
  });
};

export const getleaderboard = (req, res) => {
  let crossid = req.params.crossid;
  timer.find({ crossid: crossid, complete: true }, function (err, timers) {
    if (err) {
      console.log("error");
    } else {
      const t = timers.map(function (row) {
        //Convert into proper time
        return {
          id: row._id,
          name: row.Username,
          time: row.totaltime,
        };
      });
      res.send(t);
    }
  });
};
