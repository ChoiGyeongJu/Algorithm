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
  const N = BigInt(lines[0]);
  let start = 1n;
  let end = N;

  while (start <= end) {
    const mid = (start + end) / 2n;
    const square = mid * mid;

    if (square === N) {
      console.log(mid.toString());
      return;
    }
    if (square > N) {
      end = mid - 1n;
    } else {
      start = mid + 1n;
    }
  }
});
