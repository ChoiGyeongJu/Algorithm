function solution(clothes) {
    let dict = {}
    for (let [cloth, type] of clothes) {
        dict[type] = (dict[type] || 0) + 1
    }
    answer = 1
    for (let key in dict) {
        // console.log(key, dict[key])
        answer *= (dict[key]) + 1
    }
    return answer - 1
}