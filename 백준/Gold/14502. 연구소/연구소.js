const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0].split(" ")[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, m] = lines[0].split(" ").map(Number);
  const grid = lines.slice(1).map((v) => v.split(" ").map(Number));

  // 0은 빈칸, 1은 벽, 2는 바이러스
  // 빈칸에 벽을 3개 세워서 바이러스가 최소한 퍼지게
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const empty = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) empty.push([i, j]);
    }
  }
  // 빈칸 중에서 3개의 좌표를 고르는 함수
  function combinations() {
    let result = [];
    function comb(start, m) {
      if (m.length === 3) {
        result.push([...m]);
        return;
      }
      for (let i = start; i < empty.length; i++) {
        const current = m.slice();
        current.push(empty[i]);
        comb(i + 1, current);
        current.pop();
      }
    }
    comb(0, []);
    return result;
  }

  function bfs(grid, walls) {
    let q = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 2) q.push([i, j]);
      }
    }

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (grid[nx][ny] === 0 && !walls.has(`${nx},${ny}`)) {
            grid[nx][ny] = 2;
            q.push([nx, ny]);
          }
        }
      }
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 0) answer++;
      }
    }
    return answer;
  }

  let answer = 0;
  const wallList = combinations();
  for (const walls of wallList) {
    // grid 깊은 복사
    const copy = JSON.parse(JSON.stringify(grid));
    const v = new Set();
    for (const wall of walls) {
      v.add(wall.join(","));
    }
    answer = Math.max(answer, bfs(copy, v));
  }
  console.log(answer - 3);
});
