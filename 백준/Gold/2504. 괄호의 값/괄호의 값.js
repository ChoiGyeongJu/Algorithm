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
  const input = lines[0];
  const stack = [];
  let total_score = 0;
  let temp_score = 1;

  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (current === "(") {
      stack.push(current);
      temp_score *= 2;
    } else if (current === "[") {
      stack.push(current);
      temp_score *= 3;
    } else if (current === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        console.log(0);
        return;
      }
      if (input[i - 1] === "(") {
        total_score += temp_score;
      }
      stack.pop();
      temp_score /= 2;
    } else if (current === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        console.log(0);
        return;
      }

      if (input[i - 1] === "[") {
        total_score += temp_score;
      }
      stack.pop();
      temp_score /= 3;
    }
  }

  if (stack.length !== 0) {
    console.log(0);
  } else {
    console.log(total_score);
  }
});
