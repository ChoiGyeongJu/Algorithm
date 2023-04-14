n, t, p = map(int, input().split())

if n == 0:
    print(1)

else:
    score = list(map(int, input().split()))
    score.append(t)
    score.sort(reverse=True)

    r = 1
    rank = [r]
    tmp = score[0]

    for i in range(1, n + 1):
        if score[i] == tmp:
            rank.append(rank[-1])
            r += 1
        elif score[i] < tmp:
            r += 1
            rank.append(r)
            tmp = score[i]

    idx = 0
    for i in range(n + 1):
        if score[i] == t:
            idx = i
            
    if idx + 1 > p:
        print(-1)
    else:
        print(rank[idx])
