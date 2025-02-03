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
  const [n, m] = lines[0].split(" ").map(Number);
  const arr = lines[1].split(" ").map(Number);

  // 연속된 구간의 합이 m이 되는 경우의 수
  let start = 0,
    end = 0,
    sum = 0,
    cnt = 0;

  while (end < n) {
    sum += arr[end];

    while (sum > m && start <= end) {
      sum -= arr[start];
      start++;
    }

    if (sum === m) {
      cnt++;
    }
    end++;
  }

  console.log(cnt);
});
