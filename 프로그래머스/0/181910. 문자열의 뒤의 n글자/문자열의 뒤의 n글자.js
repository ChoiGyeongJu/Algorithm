function solution(my_string, n) {
    return my_string.split('').reverse().join('').slice(0, n).split('').reverse().join('')
}