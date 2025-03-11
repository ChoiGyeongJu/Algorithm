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
  const n = Number(lines[0]);

  for (let i = 0; i < n; i++) {
    const s = lines[i + 1].split("");
    if (checkValid(s)) console.log("YES");
    else console.log("NO");
  }

  function checkValid(s) {
    // s가 유효한 괄호 문자열인지 체크
    const stack = [];
    for (const x of s) {
      if (x === "(") {
        stack.push(x);
      } else {
        if (stack.length) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    if (stack.length === 0) return true;
    else return false;
  }
});
