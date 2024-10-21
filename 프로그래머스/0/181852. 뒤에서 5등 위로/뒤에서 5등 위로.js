function solution(num_list) {
    const sortedList = num_list.sort((a, b) => a - b)
    return sortedList.slice(5)
}