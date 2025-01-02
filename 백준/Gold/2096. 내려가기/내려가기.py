import sys
input = sys.stdin.readline

n = int(input())

prev_max = list(map(int, input().split()))
prev_min = prev_max[:]

for _ in range(1, n):
    cur = list(map(int, input().split()))
    
    max_0 = cur[0] + max(prev_max[0], prev_max[1])
    max_1 = cur[1] + max(prev_max[0], prev_max[1], prev_max[2])
    max_2 = cur[2] + max(prev_max[1], prev_max[2])
    
    min_0 = cur[0] + min(prev_min[0], prev_min[1])
    min_1 = cur[1] + min(prev_min[0], prev_min[1], prev_min[2])
    min_2 = cur[2] + min(prev_min[1], prev_min[2])
    
    prev_max = [max_0, max_1, max_2]
    prev_min = [min_0, min_1, min_2]

print(max(prev_max), min(prev_min))
