const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 3) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);
  const m = Number(lines[2]);

  let start = 1;
  let end = m;
  let answer = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const val = [];
    let total = 0;
    for (const x of arr) {
      val.push(Math.min(x, mid));
      total += Math.min(x, mid);
    }

    if (total > m) {
      end = mid - 1;
    } else {
      answer = Math.max(answer, Math.max(...val));
      start = mid + 1;
    }
  }
  console.log(answer);
});
