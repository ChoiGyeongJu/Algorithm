function solution(my_string) {
    let tmp = ''
    let answer = []
    for (let i = my_string.length - 1; i > -1; i--) {
        tmp = my_string[i] + tmp
        answer.push(tmp)
    }
    
    return answer.sort()
}