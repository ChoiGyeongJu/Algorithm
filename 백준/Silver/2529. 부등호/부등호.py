from itertools import permutations
import sys
input = sys.stdin.readline

numList = [0,1,2,3,4,5,6,7,8,9]

k = int(input())
arr = list(input().split())

# numList에서 k+1개 추출
def isValid(numStr):
    index = 0
    for x in arr:
        left = numStr[index]
        right = numStr[index + 1]
        index += 1
        if x == '<':
            if int(left) < int(right):
                continue
            else:
                return False
        elif x == '>':
            if int(left) > int(right):
                continue
            else:
                return False
    return True

answer = []
permute = permutations(numList, k + 1)
for num in list(permute):
    x = ''.join(map(str, num))
    if isValid(x):
        answer.append(x)

print(answer[-1], answer[0], sep='\n')