const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, k] = lines[0].split(" ").map(Number);
  // k번째로 제거된 수 출력

  const prime = Array.from({ length: n + 1 }, () => true);
  let cnt = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      if (!prime[j]) continue;

      prime[j] = false;
      cnt += 1;

      if (cnt === k) console.log(j);
    }
  }
});
