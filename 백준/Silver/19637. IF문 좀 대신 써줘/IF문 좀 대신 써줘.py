import bisect
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

name =[]
power = []
for _ in range(n):
    a, b = input().split()
    name.append(a)
    power.append(int(b))

p = []
for _ in range(m):
    p.append(int(input()))
    
for i in range(len(p)):
    x = p[i]
    idx = bisect.bisect_left(power, x)
    print(name[idx])