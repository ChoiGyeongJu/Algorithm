const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
rl.on("line", (input) => {
    n = parseInt(input);
    rl.close();
});

rl.on("close", () => {
  let answer = 0
  do {
    if (n % 5 === 0) {
      answer += n / 5;
      break;
    }
    answer += 1;
    n -= 3;
  } while (n > 0);
  if (n < 0) console.log(-1);
  else console.log(answer);
});