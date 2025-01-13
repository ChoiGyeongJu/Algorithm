function solution(s) {
    const d = {
        '(': ')', '[': ']', '{': '}'
    }
    function checkValid(arr) {
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (stack.length && d[stack.slice(-1)] === arr[i]) {
                stack.pop();
            } else if (['(', '[', '{'].indexOf(arr[i]) !== -1) {
                stack.push(arr[i])
            } else {
                return false
            }
        }
        return stack.length === 0
    }
    
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = s.slice(i, s.length) + s.slice(0, i)
        if (checkValid(arr)) answer += 1
    }
    return answer;
}