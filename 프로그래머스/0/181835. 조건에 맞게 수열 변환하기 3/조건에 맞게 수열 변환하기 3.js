function solution(arr, k) {
    let answer = []
    if (k % 2 === 0) {
        // k 더하기
        for (let i = 0; i < arr.length; i++) {
            answer.push(arr[i] + k)
        }
    } else {
        // k 곱하기
        for (let i = 0; i < arr.length; i++) {
            answer.push(arr[i] * k)
        }
    }
    return answer
}