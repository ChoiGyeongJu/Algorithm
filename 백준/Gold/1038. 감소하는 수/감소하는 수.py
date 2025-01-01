from itertools import combinations

n = int(input())

numList = [i for i in range(10)]

desc_num = []
for i in range(1, 11):
    for a in combinations(numList, i):
        tmp = list(a)
        tmp.sort(reverse=True)

        desc_num.append(int(''.join(map(str, tmp))))
desc_num.sort()

if len(desc_num) - 1 >= n:
    print(desc_num[n])

else:
    print(-1)