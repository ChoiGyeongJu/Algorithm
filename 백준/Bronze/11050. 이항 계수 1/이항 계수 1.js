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
  const [n, k] = lines[0].split(" ").map(Number);

  function solution(num, cnt) {
    let val = 1;
    for (let i = 0; i < cnt; i++) {
      val *= num - i;
    }
    return val;
  }

  console.log(solution(n, k) / solution(k, k));
});
