const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(parseInt(input))
  rl.close()
});

// output
rl.on("close", () => {
  let x = lines[0]

  dp = new Array(x + 1).fill(0)
  
  for (let i = 2; i < x + 1; i++) {
    dp[i] = dp[i - 1] + 1

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i])
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i])
    }
  }

  console.log(dp[x])
});




