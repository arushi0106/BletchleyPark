export default (
  crossword = {
    table: [
      ["-", "-", "-", "-", "-", "g"],
      ["-", "-", "-", "-", "-", "r"],
      ["-", "-", "-", "m", "-", "a"],
      ["-", "-", "-", "a", "-", "p"],
      ["o", "r", "a", "n", "g", "e"],
      ["-", "-", "-", "g", "-", "s"],
      ["-", "-", "-", "o", "-", "-"],
    ],
    result: [
      {
        answer: "orange",
        clue: "fruit and colour",
        startx: 1,
        starty: 5,
        orientation: "across",
        position: 1,
      },
      {
        answer: "mango",
        clue: "summer fruit",
        startx: 4,
        starty: 3,
        orientation: "down",
        position: 2,
      },
      {
        answer: "grapes",
        clue: "both black and green in colour",
        startx: 6,
        starty: 1,
        orientation: "down",
        position: 3,
      },
    ],
    rows: 7,
    cols: 6,
    table_string:
      "-----g<br>-----r<br>---m-a<br>---a-p<br>orange<br>---g-s<br>---o--<br>",
    position: [
      ["", "", "", "", "", 3],
      ["", "", "", "", "", ""],
      ["", "", "", 2, "", ""],
      ["", "", "", "", "", ""],
      [1, "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ],
    date: "Fri Dec 24 2021 17:57:16 GMT+0530 (India Standard Time)",
    _id: "61bb6c79a23e042346884245",
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CROSSWORD":
      console.log(action.payload);
      return action.payload;
    case "FETCH_CONTEST":
      console.log(action.payload);
      return action.payload;
    default:
      return crossword;
  }
};
