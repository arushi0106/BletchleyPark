import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {

  // console.log(req.body.words);
  // console.log(req.body.title);
  // const layout = await clg.generateLayout(req.body.words);
  // console.log(layout);
  // const mycrossword= new Crossword({title:req.body.title,privacy:'0',words:req.body.words});
  // console.log(mycrossword);
  // await mycrossword.save();

  console.log(req.body);

  const layout = await clg.generateLayout(req.body);
  console.log(layout);
  res.send(layout);
};
