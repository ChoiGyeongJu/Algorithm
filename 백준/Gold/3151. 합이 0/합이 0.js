const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (input) => {
  lines.push(input.trim());
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  arr.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    const target = -arr[i];

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum === target) {
        if (arr[left] === arr[right]) {
          let count = right - left + 1;
          answer += (count * (count - 1)) / 2;
          break;
        }

        let leftCount = 1,
          rightCount = 1;

        while (left + 1 < right && arr[left] === arr[left + 1]) {
          left++;
          leftCount++;
        }

        while (right - 1 > left && arr[right] === arr[right - 1]) {
          right--;
          rightCount++;
        }

        answer += leftCount * rightCount;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  console.log(answer);
});
