import mongoose from "mongoose";

const timerSchema = mongoose.Schema({
    starttime:String,
    startdate:String,
    totaltime:String,
    userid:String,
    crossid:String,
  });

  const timer = mongoose.model("timer", timerSchema);
  export default timer;