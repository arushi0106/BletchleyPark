import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  console.log(req.body);
  const data = req.body.clue;

  const re = /\s*(?:;|$)\s*/
  const nameList = data.split(re)
  var myjson = [];
  nameList.forEach(myfun);


  function myfun(item, index) {
    if (index != nameList.length - 1) {
      console.log(item);
      const se = /\s*(?:,|$)\s*/
      const x = item.split(se);
      var ok = 1;
      var letters = /^[A-Za-z]+$/;
      if (x[1].match(letters)) {
        console.log('correct');
        ok = 1;
      }
      else {
        ok = 0;
        console.log('wrong');
      }


      if (ok) {
        var input_json =
        {
          clue: x[0],
          answer: x[1],
        }
        myjson.push(input_json);

      }
    }
  }

  
    const layout = await clg.generateLayout(myjson);
    console.log(layout);
    res.send(layout);
  };
