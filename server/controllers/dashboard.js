import Crossword from "../models/crossword.js";

export const getdashboard = (req, res) => {
  // res.send("dashboard");
  console.log("inside dashboard");
  console.log(req.params.id);
  Crossword.find({userid:req.params.id}, function (err, Crosswords) {
    if (err) {
      cross = "error";
    } else if (!Crosswords) {
      cross = "no crossword";
    } else {
      res.send(Crosswords);
    }
  });
};
