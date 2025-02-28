n = int(input())

arr1 = []
arr2 = []
answer = 0  

for _ in range(n):
    num = int(input())
    if num > 1:
        arr2.append(num)
    elif num == 1:
        answer += 1
    else:
        arr1.append(num)

arr1.sort()

if len(arr1) % 2 == 0:
    for i in range(0, len(arr1), 2):
        answer += arr1[i] * arr1[i + 1]
else:
    for i in range(0, len(arr1) - 1, 2):
        answer += arr1[i] * arr1[i + 1]
    answer += arr1[-1]


arr2.sort(reverse=True)

if len(arr2) % 2 == 0:
    for i in range(0, len(arr2), 2):
        answer += arr2[i] * arr2[i + 1]
else:
    for i in range(0, len(arr2) - 1, 2):
        answer += arr2[i] * arr2[i + 1]
    answer += arr2[-1]

print(answer)

