function solution(sides) {
    const sorted = sides.sort((a, b) => b - a)
    if (sorted[0] >= sorted[1] + sorted[2]) {
        return 2
    } else return 1
}