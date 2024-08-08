function solution(a, b) {
    const sequence = Number(String(a) + String(b))
    const multiply = 2 * a * b
    
    return Math.max(sequence, multiply)
}