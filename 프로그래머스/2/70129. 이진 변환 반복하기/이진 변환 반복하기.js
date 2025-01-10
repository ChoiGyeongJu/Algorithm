function solution(s) {
    let cnt = 0;
    let t = 0;

    while (s != '1') {
        t += 1
        cnt += s.split('0').length - 1
        
        s = s.split('0').join('')
        s = s.length.toString(2)
    }
    return [t, cnt]
}