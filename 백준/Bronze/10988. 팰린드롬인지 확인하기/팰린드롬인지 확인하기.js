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
  const s = lines[0];
  const rev = s.split("").reverse().join("");

  if (s === rev) console.log(1);
  else console.log(0);
});
