import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import User from "../models/user.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  // console.log(req.body.user);
  // const layout = await clg.generateLayout(req.body.words);
  const mycrossword = new Crossword({ title: req.body.title, privacy: '0', words: req.body.words, userid: req.body.user.result._id });
  // console.log(req.body.user.result);
  // mycrossword.user.push(req.body.user.result._id);
  await mycrossword.save(); 
  // res.send(layout);
};

export const playCrossword = async (req,res) => {
  // console.log(req.body);
  let words=req.body.words.map((w)=>{
    return {
      answer:w.answer,
      clue:w.clue,
    }
  })
  console.log(words);
  const layout = await clg.generateLayout(words);
  console.log(layout);
  res.send(layout);
}
