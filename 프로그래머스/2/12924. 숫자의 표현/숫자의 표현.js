function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        let acc = 0;
        for (let j = i; j <= n; j++) {
            acc += j;
            if (acc === n) {
                answer += 1;
                
            } else if (acc > n) {
                break;
            }
        }
    }
    return answer;
}