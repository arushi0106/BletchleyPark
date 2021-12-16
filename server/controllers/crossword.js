import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  console.log(req.body);

  const layout = await clg.generateLayout(req.body);
  console.log(layout);
  res.send(layout);
};
