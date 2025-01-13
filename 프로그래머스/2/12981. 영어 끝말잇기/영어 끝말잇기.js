function solution(n, words) {
    
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1].slice(-1) === words[i][0] && 
            words.indexOf(words[i]) === i) continue;
        return [(i % n) + 1, Math.ceil((i + 1) / n)]
    }
    return [0, 0];
}