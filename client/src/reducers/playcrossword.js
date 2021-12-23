export default (crossword = {
  table: [
    ["a", "p", "p", "l", "e"],
    ["-", "-", "a", "-", "-"],
    ["e", "a", "r", "t", "h"],
    ["-", "-", "k", "-", "-"],
  ],
  result: [
    {
      clue: "red fruit",
      answer: "apple",
      startx: 1,
      starty: 1,
      orientation: "across",
      position: 1,
    },
    {
      clue: "planet we live in",
      answer: "earth",
      startx: 1,
      starty: 3,
      orientation: "across",
      position: 2,
    },
    {
      clue: "where chldren play",
      answer: "park",
      startx: 3,
      starty: 1,
      orientation: "down",
      position: 3,
    },
  ],
  rows: 4,
  cols: 5,
  table_string: "apple<br>--a--<br>earth<br>--k--<br>",
}, action) => {
    switch (action.type) {
      case "FETCH_CROSSWORD":
        console.log(action.payload);
        return action.payload;
      default:
        return crossword;
    }
  };
  