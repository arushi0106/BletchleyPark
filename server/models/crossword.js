import mongoose from "mongoose";
import User from "./user.js";

const Schema = mongoose.connection;
const crosswordSchema = mongoose.Schema({
  title: String,
  privacy: Boolean,
  words:[ {
    answer: String,
    clue: String,
  }],
  userid: String,
});

const Crossword = mongoose.model("Crossword", crosswordSchema);

export default Crossword;
