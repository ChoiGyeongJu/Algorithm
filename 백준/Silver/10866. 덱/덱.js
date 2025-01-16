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
  let idx = 0;
  const n = Number(lines[idx++]);

  let answer = [];
  let deque = [];

  for (let i = 0; i < n; i++) {
    const command = lines[idx++].split(" ");

    switch (command[0]) {
      case "push_back":
        deque.push(command[1]);
        break;
      case "push_front":
        deque.unshift(command[1]);
        break;
      case "pop_front":
        answer.push(deque.length ? deque.shift() : -1);
        break;
      case "pop_back":
        answer.push(deque.length ? deque.pop() : -1);
        break;
      case "size":
        answer.push(deque.length);
        break;
      case "empty":
        answer.push(deque.length === 0 ? 1 : 0);
        break;
      case "front":
        answer.push(deque.length ? deque[0] : -1);
        break;
      case "back":
        answer.push(deque.length ? deque[deque.length - 1] : -1);
        break;
    }
  }
  console.log(answer.join("\n"));
});
