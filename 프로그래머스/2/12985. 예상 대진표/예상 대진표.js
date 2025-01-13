function solution(n,a,b)
{
    let round = 1;
    
    while (a != b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    return round - 1;
}