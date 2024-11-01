const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    
    if (lines.length === 1) {
        rl.close()
    }
});

rl.on("close", () => {
    const [A, B, C] = lines[0].split(' ').map(BigInt)
    // (A**B) % C 출력
    function pow(base, exp, mod) {
        let result = BigInt(1)
        while (exp) {
            if (exp % BigInt(2) === BigInt(1)) {
                result = (result * base) % mod
            }
            base = (base * base) % mod
            exp = exp / BigInt(2)
        }
        return result % mod
    }
    console.log(pow(A, B, C).toString())
});