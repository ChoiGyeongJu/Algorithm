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
  const [a, b] = lines[0].split(" ").map(Number);

  // 2를 곱한다.
  // 1을 맨 뒤에 추가한다.

  const answer = [];
  function dfs(num, cnt) {
    if (num === b) {
      answer.push(cnt);
      return;
    }
    if (num > b) return;
    dfs(num * 2, cnt + 1);
    dfs(num * 10 + 1, cnt + 1);
  }

  dfs(a, 0);
  if (answer.length) {
    console.log(Math.min(...answer) + 1);
  } else {
    console.log(-1);
  }
});
