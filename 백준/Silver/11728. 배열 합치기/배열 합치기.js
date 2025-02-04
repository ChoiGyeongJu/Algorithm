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
  const A = lines[1].split(" ").map(Number);
  const B = lines[2].split(" ").map(Number);

  const answer = A.concat(...B);
  answer.sort((a, b) => a - b);
  console.log(answer.join(" "));
});
