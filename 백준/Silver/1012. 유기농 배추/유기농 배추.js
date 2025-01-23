const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let idx = -1;
let total_lines = 1;
let testCase = 0;

rl.on("line", (input) => {
  lines.push(input.trim());
  idx++;
  const [a, b, c] = lines[idx].split(" ").map(Number);
  if (c) {
    total_lines += c + 1;
    testCase += 1;
  }

  if (testCase === Number(lines[0]) && lines.length === total_lines) {
    rl.close();
  }
});

rl.on("close", () => {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  let idx = 0;
  const T = Number(lines[idx++]);

  for (let t = 0; t < T; t++) {
    const [m, n, k] = lines[idx++].split(" ").map(Number);
    const grid = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = idx; i < idx + k; i++) {
      const [x, y] = lines[i].split(" ").map(Number);
      grid[y][x] = 1;
    }
    idx += k;

    function bfs(grid, x, y) {
      const q = [];
      q.push([x, y]);
      grid[x][y] = 0;
      while (q.length) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
          const nx = dx[i] + x,
            ny = dy[i] + y;
          if (0 <= nx && nx < n && 0 <= ny && ny < m) {
            if (grid[nx][ny] === 1) {
              grid[nx][ny] = 0;
              q.push([nx, ny]);
            }
          }
        }
      }
      return;
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) {
          answer++;
          bfs(grid, i, j);
        }
      }
    }
    console.log(answer);
  }
});
