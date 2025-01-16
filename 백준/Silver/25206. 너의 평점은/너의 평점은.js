const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 20) {
    rl.close();
  }
});

rl.on("close", () => {
  const score = {
    "A+": 4.5,
    A0: 4,
    "B+": 3.5,
    B0: 3,
    "C+": 2.5,
    C0: 2,
    "D+": 1.5,
    D0: 1,
    F: 0,
    P: 0,
  };

  let total_score = 0;
  let mod = 0;
  for (let i = 0; i < 20; i++) {
    const [과목, 학점, 등급] = lines[i].split(" ");

    if (등급 === "P") continue;
    mod += Number(학점);
    total_score += score[등급] * 학점;
  }

  console.log(total_score / mod);
});
