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

  let dp = Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < Math.min(n, i + arr[i] + 1); j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  if (dp[n - 1] === Number.MAX_SAFE_INTEGER) {
    console.log(-1);
  } else {
    console.log(dp[n - 1]);
  }
});
