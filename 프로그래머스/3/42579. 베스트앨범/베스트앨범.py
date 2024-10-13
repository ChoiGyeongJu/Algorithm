def solution(genres, plays):
    answer = []

    total = {}
    gen = {}

    for i in range(len(genres)):
        if genres[i] in gen:
            gen[genres[i]].append((i, plays[i]))
        else:
            gen[genres[i]] = [(i, plays[i])]
        if genres[i] in total:
            total[genres[i]] += plays[i]
        else:
            total[genres[i]] = plays[i]

    total_sort = sorted(total.items(), key=lambda x: -x[1])
    for genre, value in total_sort:
        gen[genre] = sorted(gen[genre], key=lambda x: -x[1])
        for i in range(len(gen[genre])):
            if i > 1:
                break
            answer.append(gen[genre][i][0])
    return answer


solution(["classic", "pop", "classic", "classic", "pop"], [500, 500, 150, 800, 2500])