import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  const data = req.body.words;
  console.log(data);
  const layout = await clg.generateLayout(data);
  console.log(layout);
  res.send(layout);
};
