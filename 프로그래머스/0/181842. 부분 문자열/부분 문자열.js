function solution(str1, str2) {
    if (str1.includes(str2) || str2.includes(str1)) return 1
    else return 0
}