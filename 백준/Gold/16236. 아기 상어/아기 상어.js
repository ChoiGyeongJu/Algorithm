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
  let grid = lines.slice(1).map((v) => v.split(" ").map(Number));

  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];

  let sharkSize = 2;
  let eatCount = 0;
  let time = 0;

  let sharkX, sharkY;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 9) {
        sharkX = i;
        sharkY = j;
        grid[i][j] = 0; // 상어 위치 초기화 (빈 공간으로)
      }
    }
  }

  function bfs(x, y) {
    const queue = [[x, y, 0]];
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    visited[x][y] = true;

    let fishList = []; // 먹을 수 있는 물고기 리스트
    let minDist = Infinity;

    while (queue.length) {
      const [cx, cy, dist] = queue.shift();

      // 현재 거리보다 더 먼 곳에 있는 물고기는 고려 안 함
      if (dist > minDist) continue;

      // 먹을 수 있는 물고기 찾기
      if (grid[cx][cy] > 0 && grid[cx][cy] < sharkSize) {
        fishList.push([cx, cy, dist]);
        minDist = dist; // 최소 거리 갱신
      }

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
          if (grid[nx][ny] <= sharkSize) {
            visited[nx][ny] = true;
            queue.push([nx, ny, dist + 1]);
          }
        }
      }
    }

    // 먹을 물고기가 있다면 정렬 후 반환
    if (fishList.length) {
      fishList.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      return fishList[0]; // 가장 우선순위 높은 물고기 반환
    }
    return null;
  }

  while (true) {
    const fish = bfs(sharkX, sharkY);

    if (!fish) break; // 더 이상 먹을 수 있는 물고기가 없으면 종료

    const [fx, fy, dist] = fish;
    sharkX = fx;
    sharkY = fy;
    time += dist;
    eatCount++;

    // 물고기 먹기
    grid[fx][fy] = 0;

    if (eatCount === sharkSize) {
      sharkSize++;
      eatCount = 0;
    }
  }

  console.log(time);
});
