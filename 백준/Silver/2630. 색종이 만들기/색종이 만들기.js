const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const grid = lines.slice(1).map((v) => v.split(" ").map(Number));

  let white = 0,
    blue = 0;

  function divide(x, y, size) {
    const color = grid[x][y];

    let same = true;
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (grid[i][j] !== color) {
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    if (same) {
      if (color === 0) white++;
      else blue++;
      return;
    }

    const nextSize = size / 2;

    divide(x, y, nextSize);
    divide(x + nextSize, y, nextSize);
    divide(x, y + nextSize, nextSize);
    divide(x + nextSize, y + nextSize, nextSize);
  }
  divide(0, 0, n);
  console.log(white);
  console.log(blue);
});
