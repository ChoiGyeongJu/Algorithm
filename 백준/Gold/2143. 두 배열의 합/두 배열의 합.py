from collections import Counter
import sys
input = sys.stdin.readline

t = int(input())
n = int(input())
A = list(map(int, input().split()))

m = int(input())
B = list(map(int, input().split()))

sum_a = []
for i in range(n):
    tmp = 0
    for j in range(i, n):
        tmp += A[j]
        sum_a.append(tmp)

c = Counter(sum_a)
    
sum_b = []
for i in range(m):
    tmp = 0
    for j in range(i, m):
        tmp += B[j]
        sum_b.append(tmp)

answer = 0
for b in sum_b:
    answer += c[t - b]

print(answer)