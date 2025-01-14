function solution(word) {
    const alph = ['A', 'E', 'I', 'O', 'U'];
    
    let answer = 0;
    let cnt = 0;
    function dfs(s) {
        if (s == word) answer = cnt;
        if (s.length === 5) return;
        
        for (const next of alph) {
            cnt += 1;
            dfs(s + next);
        }
    }
    
    dfs('', 0);
    return answer;
}