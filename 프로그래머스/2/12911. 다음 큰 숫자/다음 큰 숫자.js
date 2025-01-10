function solution(n) {
    let cnt = n.toString(2).split('1').length - 1
    let answer = n + 1

    while (true) {
        let tmp = answer.toString(2).split('1').length - 1
        if (tmp == cnt) break;
        else answer += 1
    }
    return answer
}