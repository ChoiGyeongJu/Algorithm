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
  const [n, l] = lines[0].split(" ").map(Number);
  const grid = lines.slice(1).map((line) => line.split(" ").map(Number));

  let totalPaths = 0;

  // 함수: 길이 가능한지 확인
  const isValidPath = (line) => {
    const visited = Array(n).fill(false); // 경사로가 놓인 칸 표시

    for (let i = 0; i < n - 1; i++) {
      const diff = line[i + 1] - line[i];

      if (diff === 0) {
        continue;
      }

      if (diff === 1) {
        // 다음 칸이 1 높음 -> 이전 칸에 경사로를 놓을 수 있는지 확인
        for (let j = i; j > i - l; j--) {
          if (j < 0 || visited[j] || line[j] !== line[i]) {
            return false;
          }
          visited[j] = true; // 경사로 설치
        }
      } else if (diff === -1) {
        // 다음 칸이 1 낮음 -> 다음 칸부터 경사로를 놓을 수 있는지 확인
        for (let j = i + 1; j <= i + l; j++) {
          if (j >= n || visited[j] || line[j] !== line[i + 1]) {
            return false;
          }
          visited[j] = true; // 경사로 설치
        }
      } else {
        // 높이 차이가 1보다 크면 불가능
        return false;
      }
    }

    return true;
  };

  // 모든 행 검사
  for (let i = 0; i < n; i++) {
    if (isValidPath(grid[i])) {
      totalPaths++;
    }
  }

  // 모든 열 검사
  for (let j = 0; j < n; j++) {
    const column = grid.map((row) => row[j]);
    if (isValidPath(column)) {
      totalPaths++;
    }
  }

  console.log(totalPaths);
});
