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
  const [n, r, c] = lines[0].split(" ").map(Number);

  // 한변 길이 초기에 2^n
  function divide(x, y, l, cnt) {
    if (x === r && y === c) return cnt;

    const half = l / 2;

    if (r < x + half && c < y + half) {
      return divide(x, y, half, cnt);
    } else if (r < x + half && c >= y + half) {
      return divide(x, y + half, half, cnt + half * half);
    } else if (r >= x + half && c < y + half) {
      return divide(x + half, y, half, cnt + half * half * 2);
    } else {
      return divide(x + half, y + half, half, cnt + half * half * 3);
    }
  }

  console.log(divide(0, 0, 2 ** n, 0));
});
