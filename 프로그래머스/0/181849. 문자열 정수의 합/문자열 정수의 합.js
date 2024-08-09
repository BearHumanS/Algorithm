function solution(num_str) {
    return [...(num_str)].map(e => Number(e)).reduce((a, b) => a + b, 0)
}