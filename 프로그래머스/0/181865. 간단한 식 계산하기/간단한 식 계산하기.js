function solution(binomial) {
    const arr = binomial.split(" ")
    const a = +arr.shift()
    const b = +arr.pop()
    
    switch (arr[0]) {
        case "+": return a + b
        case "-": return a - b
        case "*": return a * b
        default: return
    }
}