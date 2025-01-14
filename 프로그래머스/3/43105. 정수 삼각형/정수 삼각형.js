function solution(dp) {
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (j === 0) dp[i][j] += dp[i - 1][0];
            else if (j === dp[i].length - 1) dp[i][j] += dp[i - 1][dp[i - 1].length - 1];
            else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
        }
    }
    return Math.max(...dp[dp.length - 1])
}