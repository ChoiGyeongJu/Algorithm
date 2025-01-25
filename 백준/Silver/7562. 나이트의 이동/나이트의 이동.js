const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0]) * 3 + 1) {
    rl.close();
  }
});

const dx = [2, 2, -2, -2, 1, -1, 1, -1];
const dy = [1, -1, 1, -1, 2, 2, -2, -2];

rl.on("close", () => {
  let idx = 0;
  const T = Number(lines[idx++]);

  for (let t = 0; t < T; t++) {
    const l = Number(lines[idx++]);
    const [x, y] = lines[idx++].split(" ").map(Number);
    const [a, b] = lines[idx++].split(" ").map(Number);
    // x, y -> a, b로 이동하는 최소 횟수
    console.log(bfs(l, x, y, a, b));
  }

  function bfs(l, x, y, a, b) {
    let head = 0;
    const q = [];
    const visited = new Set();

    visited.add(`${x},${y}`);
    q.push([x, y, 0]);

    while (q.length > head) {
      const [x, y, cnt] = q[head++];
      if (x === a && y === b) {
        return cnt;
      }

      for (let i = 0; i < 8; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        if (0 <= nx && nx < l && 0 <= ny && ny < l) {
          if (!visited.has(`${nx},${ny}`)) {
            visited.add(`${nx},${ny}`);
            q.push([nx, ny, cnt + 1]);
          }
        }
      }
    }
  }
});
