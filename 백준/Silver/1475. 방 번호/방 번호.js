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
  const n = lines[0].split("").map(Number);

  const count = Array.from({ length: 10 }, () => 0);
  for (const num of n) {
    count[num] += 1;
  }

  count[6] = Math.ceil((count[6] + count[9]) / 2);
  count[9] = 0;
  console.log(Math.max(...count));
});
