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
  let grid = [];
  for (let i = 1; i < n + 1; i++) {
    grid.push(lines[i].split(" ").map(Number));
  }

  let chicken = [];
  let home = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) home.push([i, j]);
      else if (grid[i][j] === 2) chicken.push([i, j]);
    }
  }

  // m개의 치킨집을 갖는 grid 기준으로 치킨 거리 반환
  function getChickenDist(alive) {
    let dist = 0;
    for (const [x, y] of home) {
      let tmp = n * n;
      for (const [a, b] of alive) {
        const val = Math.abs(x - a) + Math.abs(y - b);
        if (val < tmp) tmp = val;
      }
      dist += tmp;
    }
    return dist;
  }

  // chicken 배열에서 중복 없이 m개 고르기
  function combinations() {
    let result = [];

    function comb(start, arr) {
      if (arr.length === m) {
        result.push([...arr]);
        return;
      }
      for (let i = start; i < chicken.length; i++) {
        arr.push(chicken[i]);
        comb(i + 1, arr);
        arr.pop();
      }
    }
    comb(0, []);
    return result;
  }

  let answer = [];
  const com = combinations();
  for (let i = 0; i < com.length; i++) {
    const m_chicken = com[i];
    answer.push(getChickenDist(m_chicken));
  }
  console.log(Math.min(...answer));
});
