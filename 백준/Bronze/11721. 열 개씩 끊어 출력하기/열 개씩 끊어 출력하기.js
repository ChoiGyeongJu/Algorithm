const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  rl.close();
});

rl.on("close", () => {
  let s = lines[0].split("");

  while (s.length) {
    console.log(s.splice(0, 10).join(""));
  }
});
