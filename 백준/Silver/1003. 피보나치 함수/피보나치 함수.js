const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(parseInt(input))

  if (lines.length === lines[0] + 1) {
    rl.close()
  }
});

// output
rl.on("close", () => {
  const T = lines[0]
  // 0, 1의 횟수
  let dp = new Array(41).fill([0, 0])
  dp[0] = [1, 0]
  dp[1] = [0, 1]
  dp[2] = [1, 1]
  dp[3] = [1, 2]
  
  for (let i = 4; i < 41; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]]
  }

  for (let i = 0; i < T; i++) {
    console.log(dp[lines[i + 1]].join(' '))
  }
});
