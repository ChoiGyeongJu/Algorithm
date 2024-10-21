function solution(myString) {
    const sp = myString.split('x')
    let answer = []
    
    for (let i = 0; i < sp.length; i++) {
        answer.push(sp[i].length)
    }
    return answer
}