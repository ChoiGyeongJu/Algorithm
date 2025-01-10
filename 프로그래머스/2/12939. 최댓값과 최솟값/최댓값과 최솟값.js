function solution(s) {
    let arr = s.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    arr.sort((a, b) => a - b)
    return String(arr[0]) + ' ' + String(arr[arr.length - 1])
}