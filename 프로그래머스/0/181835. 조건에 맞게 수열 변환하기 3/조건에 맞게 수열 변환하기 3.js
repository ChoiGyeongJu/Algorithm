function solution(arr, k) {
    return arr.map(v => {
        if (k % 2 === 0) return v + k
        else return v * k
    })
}