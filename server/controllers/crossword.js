import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  console.log(req.body);
  const data=req.body.clue;

const re = /\s*(?:;|$)\s*/
const nameList = data.split(re)
var myjson=[];
nameList.forEach(myfun);


function myfun(item, index)
{
  if(index!=nameList.length){
  console.log(item);
  const se = /\s*(?:,|$)\s*/
  const x=item.split(se);
  var input_json = 
      {
        clue: x[0],
        answer:  x[1],
      }
      myjson.push(input_json);
  console.log(x[0]);
  console.log(x[1]);
    }

}
console.log(myjson);

  // res.send('THIS WORKS');
  console.log(myjson);
  const layout = await clg.generateLayout(myjson);
  console.log(layout);
  res.send(layout);
};
