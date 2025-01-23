const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  const size = lines[0].split(" ").map(Number)[1];
  if (lines.length === size + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [m, n] = lines[0].split(" ").map(Number);
  const grid = lines.slice(1).map((v) => v.split(" ").map(Number));

  // 1은 익은 토마토, 0은 익지 않은 토마토, -1은 빈 공간
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  let q = [];
  let head = 0;
  function bfs() {
    let answer = 0;
    while (q.length > head) {
      const [x, y, day] = q[head++];
      // const [x, y, day] = q.shift();
      answer = Math.max(answer, day);

      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (grid[nx][ny] === 0) {
            grid[nx][ny] = 1;
            q.push([nx, ny, day + 1]);
          }
        }
      }
    }
    return answer;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        q.push([i, j, 0]);
      }
    }
  }

  const answer = bfs();
  let flag = false;
  grid.forEach((v) => {
    if (v.some((s) => s === 0)) {
      flag = true;
    }
  });
  console.log(flag ? -1 : answer);
});
