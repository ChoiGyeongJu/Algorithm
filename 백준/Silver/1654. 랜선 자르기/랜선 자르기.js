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
  const [n, m] = lines[0].split(" ").map(Number);
  const arr = lines.slice(1).map((v) => Number(v));

  let start = 0;
  let end = Math.max(...arr);

  let answer = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let cnt = 0;

    for (const x of arr) {
      cnt += Math.floor(x / mid);
    }

    if (cnt >= m) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer);
});
