const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const grid = lines.slice(1).map((v) => v.split(" ").map(Number));
  // 영역의 최대 높이
  let max_height = 0;
  grid.forEach((v) => {
    max_height = Math.max(max_height, ...v);
  });

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // 비의 양에 따라 생기는 안전한 영역 개수의 최대값
  function bfs(grid, i, j, rain) {
    let q = [];
    let head = 0;
    q.push([i, j]);
    while (q.length > head) {
      const [x, y] = q[head++];
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          if (grid[nx][ny] >= rain) {
            grid[nx][ny] = 0;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= max_height; i++) {
    let cnt = 0;
    const copy = JSON.parse(JSON.stringify(grid));
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (copy[j][k] >= i) {
          cnt++;
          bfs(copy, j, k, i);
        }
      }
    }
    answer = Math.max(answer, cnt);
  }
  console.log(answer);
});
