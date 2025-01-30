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
  const grid = lines.slice(1).map((v) => v.split("").map(Number));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let group_id = 0;
  // 0 영역별 그룹 id 저장
  const group = Array.from({ length: n }, () => Array(m).fill(-1));
  const group_size = new Map();

  function bfs(x, y) {
    const q = [];
    q.push([x, y]);
    group[x][y] = group_id;

    let head = 0;
    while (q.length > head) {
      const [x, y] = q[head++];
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (grid[nx][ny] === 0 && group[nx][ny] === -1) {
            group[nx][ny] = group_id;
            q.push([nx, ny]);
          }
        }
      }
    }
    group_size.set(group_id, head);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0 && group[i][j] === -1) {
        bfs(i, j);
        group_id++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== 0) {
        // 네 방향의 그룹 ID에 해당하는 그룹 size값들의 합
        const group_set = new Set();
        for (let k = 0; k < 4; k++) {
          const x = i + dx[k],
            y = j + dy[k];
          if (0 <= x && x < n && 0 <= y && y < m) {
            group_set.add(group[x][y]);
          }
        }

        let cnt = 1;
        for (const id of [...group_set]) {
          if (id === -1) continue;
          cnt += group_size.get(id);
        }
        grid[i][j] = cnt % 10;
      }
    }
  }

  grid.forEach((v) => console.log(v.join("")));
});
