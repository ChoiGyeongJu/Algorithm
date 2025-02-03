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
  const arr = lines[1].split(" ").map(Number);
  const x = Number(lines[2]);

  arr.sort((a, b) => a - b);
  let cnt = 0,
    start = 0,
    end = n - 1;
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === x) cnt++;

    if (sum > x) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  console.log(cnt);
});
