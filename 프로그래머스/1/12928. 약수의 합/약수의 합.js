function solution(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push (i)
        } 
    }
    const result = arr.reduce((acc, curr) => acc + curr, 0)
    return result
}