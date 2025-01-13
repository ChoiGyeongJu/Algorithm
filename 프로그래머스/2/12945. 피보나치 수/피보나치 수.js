function solution(n) {
    let mod = 1234567
    let dp = Array.from({ length: n }, () => 0)
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod
    }
    return dp[n]    
}