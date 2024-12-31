import sys
input = sys.stdin.readline

n, k = map(int, input().split())

score = [0] * (n + 1)

for _ in range(n):
    num, gold, silver, bronze = map(int, input().split())
    score[num] += (3 * gold + 2 * silver + bronze)

answer = 1
for s in score:
    if s > score[k]:   
        answer += 1

print(answer)