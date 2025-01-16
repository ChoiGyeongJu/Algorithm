const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0].split(" ")[1]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, m] = lines[0].split(" ").map(Number);

  let answer = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 1; i < m + 1; i++) {
    const [a, b] = lines[i].split(" ").map(Number);
    let tmp = [];
    for (let j = a - 1; j < b; j++) {
      tmp.push(answer[j]);
    }
    tmp.reverse();
    answer.splice(a - 1, b - a + 1, ...tmp);
  }
  console.log(answer.join(" "));
});
