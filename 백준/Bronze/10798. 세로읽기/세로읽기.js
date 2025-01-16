const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 5) {
    rl.close();
  }
});

rl.on("close", () => {
  const arr = lines;

  let answer = "";
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[j].length > i) answer += arr[j][i];
      else continue;
    }
  }
  console.log(answer);
});
