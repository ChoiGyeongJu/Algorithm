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
  const arr = [0].concat(lines[1].split(" ").map(Number));

  // n개의 카드를 갖기 위해 지불해야하는 최소금액
  const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      dp[i] = Math.min(dp[i], dp[i - j] + arr[j]);
    }
  }

  console.log(dp[n]);
});
