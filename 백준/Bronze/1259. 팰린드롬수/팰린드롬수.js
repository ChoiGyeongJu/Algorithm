const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  const x = input.trim();
  if (x == 0) rl.close();
  lines.push(input.trim());
});

rl.on("close", () => {
  for (const num of lines) {
    const rev = num.split("").reverse().join("");
    console.log(rev === num ? "yes" : "no");
  }
});
