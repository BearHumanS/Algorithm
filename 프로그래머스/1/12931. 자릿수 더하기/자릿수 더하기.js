function solution(n) {
    const arr = Array.from(String(n), Number)
    return arr.reduce((acc, curr) => acc + curr, 0)
}
