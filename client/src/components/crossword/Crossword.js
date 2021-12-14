import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCrossword } from "../../actions/crossword";
// import Navbar from "../Navbar";
import CrosswordGrid from "./CrosswordGrid";

const Crossword = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    words: [
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
    ],
  });

  const submitHandler = () => {
    dispatch(createCrossword(data));
    console.log(data);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <button onClick={submitHandler}>Submit</button>
      <CrosswordGrid />
    </div>
  );
};

export default Crossword;
