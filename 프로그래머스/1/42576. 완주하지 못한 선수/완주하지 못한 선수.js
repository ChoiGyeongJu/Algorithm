function solution(participant, completion) {
    let dict = {} // 완주자 목록
    for (const name of completion) {
        dict[name] = (dict[name] || 0) + 1;
    }
    
    for (const name of participant) {
        if (!dict[name]) {
            return name;
        } else {
            dict[name] -= 1;
        }
    }
}