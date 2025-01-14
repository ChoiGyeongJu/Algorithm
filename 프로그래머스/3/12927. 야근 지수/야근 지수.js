function solution(n, works) {
    works.sort((a, b) => b - a); 

    while (n > 0) {
        if (works[0] === 0) break; 

        works[0]--; // 가장 큰 작업 시간 감소
        n--;

        let i = 0;
        while (i + 1 < works.length && works[i] < works[i + 1]) {
            [works[i], works[i + 1]] = [works[i + 1], works[i]];
            i++;
        }
    }

    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
