const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = n - 1;

  let answer = [arr[start], arr[end]];
  let tmp = Math.abs(arr[start] + arr[end]);

  while (start < end) {
    const val = arr[start] + arr[end];

    if (Math.abs(val) < tmp) {
      tmp = Math.abs(val);
      answer = [arr[start], arr[end]];
    }

    if (val < 0) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  console.log(answer.join(" "));
});
