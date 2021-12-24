import cron from "node-cron";
import fetch from "node-fetch";
import clg from "crossword-layout-generator";

let url =
  "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/1976/01/01.json";
cron.schedule("0 0 * * 0", function () {
  url =
    "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/" +
    year +
    "/" +
    month +
    "/" +
    day +
    ".json";
});

export const getContest = async (req, res) => {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  const l = data.size.cols;
  const w = data.size.rows;
  let layout = {};
  let table = [];
  let position = [];
  for (let i = 0; i < l; i++) {
    let row = [],
      pos = [];
    for (let j = 0; j < w; j++) {
      row.push(data.grid[i * l + j]);
      if (data.gridnums[i * l + j] != 0) {
        pos.push(data.gridnums[i * l + j]);
      } else {
        pos.push("");
      }
    }
    table.push(row);
    position.push(pos);
  }
  let result = [];
  for (let i = 0; i < data.clues.across.length; i++) {
    let temp = data.clues.across[i].split(". ");

    result.push({
      clue: temp[1],
      position: temp[0],
      orientation: "across",
    });
  }
  for (let i = 0; i < data.clues.down.length; i++) {
    let temp = data.clues.down[i].split(". ");

    result.push({
      clue: temp[1],
      position: temp[0],
      orientation: "down",
    });
  }
  layout.table = table;
  layout.rows = w;
  layout.cols = l;
  layout.position = position;
  layout.result = result;
  console.log(table);
  console.log(result);
  res.send(layout);
};
