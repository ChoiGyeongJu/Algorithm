function solution(n) {
    let answer = 0;
    
    while (n > 0) {
        if (n % 2 == 1) {
            n -= 1;
            answer += 1;
        } else {
            n /= 2;
        }
    }
    return answer;
}