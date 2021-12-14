import mongoose from "mongoose";

const crosswordSchema = mongoose.Schema({
  title: String,
  privacy: Boolean,
  words: {
    clues: String,
    answer: String,
  },
});

const Crossword = mongoose.model("Crossword", crosswordSchema);

export default Crossword;
