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
  const [n, s] = lines[0].split(" ").map(Number);
  const arr = lines[1].split(" ").map(Number);

  let start = 0;
  let end = 0;
  let sum = 0;
  let answer = Infinity;
  while (end < n) {
    sum += arr[end];

    while (sum >= s) {
      answer = Math.min(answer, end - start + 1);
      sum -= arr[start];
      start++;
    }
    end++;
  }
  console.log(answer === Infinity ? 0 : answer);
});
