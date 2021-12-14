import mongoose from "mongoose";
import Crossword from "../models/crossword.js";
import clg from "crossword-layout-generator";

export const createCrossword = async (req, res) => {
  const data = [
    {
      clue: "that which is established as a rule or model by authority, custom, or general consent",
      answer: "apple",
    },
    {
      clue: "a machine that computes",
      answer: "oranges",
    },
    {
      clue: "the collective designation of items for a particular purpose",
      answer: "pear",
    },
    {
      clue: "an opening or entrance to an inclosed place",
      answer: "guava",
    },
    {
      clue: "a point where two things can connect and interact",
      answer: "watermelon",
    },
  ];
  console.log(data);
  const layout = await clg.generateLayout(data);
  console.log(layout);
  res.send(layout);
};
