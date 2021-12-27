import mongoose from "mongoose";

const dateSchema = mongoose.Schema({
    startdate:String,
  });

  const mydate = mongoose.model("mydate", dateSchema);
  export default mydate;