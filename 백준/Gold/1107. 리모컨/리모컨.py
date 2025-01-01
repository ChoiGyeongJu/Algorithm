n = int(input())

m = int(input())

if m:
    num = list(map(int, input().split()))
else:
    num = []

answer = abs(100 - n)
for i in range(1000000):
    tmp = str(i)

    for j in range(len(tmp)):
        if int(tmp[j]) in num:
            break

        elif j == len(tmp) - 1:
            answer = min(answer, abs(i - n) + len(tmp))

print(answer)