import sys
input = sys.stdin.readline

n = int(input())

def prime(num):
    arr = [True] * (num + 1)
    
    m = int(num ** 0.5)
    for i in range(2, m + 1):
        if arr[i]:
            for j in range(i + i, num + 1, i):
                arr[j] = False

    return [i for i in range(2, num + 1) if arr[i] == True]

answer = 0
prime_list = prime(n)

for i in range(len(prime_list)):
    tmp = 0

    for j in range(i, len(prime_list)):
        tmp += prime_list[j]

        if tmp > n:
            break

        elif tmp == n:
            answer += 1
            break

print(answer)