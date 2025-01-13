function solution(arr) {
    // 최대공약수
    function gcd(a, b) {
        while (b > 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;   
    }
    
    let answer = arr[0]
    for (let i = 1; i < arr.length; i++) {
        answer = (answer * arr[i]) / gcd(answer, arr[i])
    }
    return answer;
}