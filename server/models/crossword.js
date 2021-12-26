import mongoose from "mongoose";


const Schema = mongoose.connection;
const crosswordSchema = mongoose.Schema({
  title: String,
  privacy: Boolean,
  words:[ {
    answer: String,
    clue: String,
  }],
  userid: String,
  username:String,
  isContest:{
    type:Boolean,
    default:false,
  },
  solved:{
    type:Number,
    default:0,
  },
  
});

const Crossword = mongoose.model("Crossword", crosswordSchema);

export default Crossword;
