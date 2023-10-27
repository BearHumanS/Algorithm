function solution(x) {
    const arr = Array.from(String(x), Number)
    const sum = arr.reduce((a, b) => a + b, 0)
    if (x % sum === 0) {
        return true
    }
    return false
}