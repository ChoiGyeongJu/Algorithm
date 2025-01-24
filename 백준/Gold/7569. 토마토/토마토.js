const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  const [_, n, h] = lines[0].split(" ").map(Number);
  if (lines.length === n * h + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [m, n, h] = lines[0].split(" ").map(Number); // 가로, 세로, 높이
  const grid = [];
  for (let i = 1; i <= h; i++) {
    let tmp = [];
    for (let j = (i - 1) * n + 1; j <= i * n; j++) {
      tmp.push(lines[j].split(" ").map(Number));
    }
    grid.push(tmp);
  }

  const dx = [0, 0, 0, 0, 1, -1];
  const dy = [0, 0, 1, -1, 0, 0];
  const dz = [1, -1, 0, 0, 0, 0];

  // 익은토마토 1, 익지않은토마토 0, 빈칸 -1
  let q = [];
  function bfs() {
    let head = 0;
    while (q.length > head) {
      const [z, x, y] = q[head++];

      for (let i = 0; i < 6; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        const nz = dz[i] + z;
        if (0 <= nx && nx < n && 0 <= ny && ny < m && 0 <= nz && nz < h) {
          if (grid[nz][nx][ny] === 0) {
            grid[nz][nx][ny] = grid[z][x][y] + 1;
            q.push([nz, nx, ny]);
          }
        }
      }
    }
    // 출력 처리
    let answer = 0;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
          if (grid[i][j][k] === 0) {
            return -1;
          }
          if (grid[i][j][k] !== -1) {
            answer = Math.max(grid[i][j][k], answer);
          }
        }
      }
    }
    return answer - 1;
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (grid[i][j][k] === 1) {
          q.push([i, j, k]);
        }
      }
    }
  }
  console.log(bfs());
});
