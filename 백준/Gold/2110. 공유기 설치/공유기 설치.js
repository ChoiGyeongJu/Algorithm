const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0].split(" ")[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, c] = lines[0].split(" ").map(Number);
  const house = lines.slice(1).map((v) => Number(v));
  house.sort((a, b) => a - b);

  let start = 1;
  let end = house[n - 1] - house[0];

  let answer = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let cnt = 1;
    let current = house[0];
    for (const x of house) {
      if (current + mid <= x) {
        cnt++;
        current = x;
      }
    }

    if (cnt < c) {
      end = mid - 1;
    } else {
      answer = mid;
      start = mid + 1;
    }
  }
  console.log(answer);
});
