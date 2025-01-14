function solution(numbers, target) {
    let answer = 0;
    function dfs(acc, cnt) {
        if (cnt > numbers.length) return;
        if (cnt === numbers.length && acc === target) {
            answer += 1;
            return;
        }
        dfs(acc + numbers[cnt], cnt + 1)
        dfs(acc - numbers[cnt], cnt + 1)
    }
    dfs(0, 0)
    return answer;
}