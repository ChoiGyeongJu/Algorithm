const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', input => {
    lines.push(input.trim());

    if (lines.length === 2) {
        rl.close();
    }
});

rl.on('close', () => {
    const [n, m] = lines.shift().split(' ').map(Number);
    const numList = lines[0].split(' ').map(Number);
    
    // 누적합을 구하면서 나머지 카운트를 저장
    let prefixSumMod = new Array(m).fill(0);
    let sum = 0;
    let answer = 0;

    // prefixSumMod[0]은 sum % m === 0인 경우도 포함해야 함
    prefixSumMod[0] = 1;

    for (let i = 0; i < n; i++) {
        sum += numList[i];
        let mod = sum % m;

        // 같은 나머지가 이전에 나온 횟수만큼 정답에 추가
        answer += prefixSumMod[mod];

        // 현재 나머지의 빈도를 증가
        prefixSumMod[mod]++;
    }

    console.log(answer);
});
