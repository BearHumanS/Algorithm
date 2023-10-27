function solution(n) {
    const x = Math.sqrt(n)
    if (x % 1 === 0) {
        return (x + 1)**2
    }
    return -1
}

/*
function solution(n) {
    let nNumber;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            const number = i
        } 
        if (i * i === n) {
          nNumber = i
            return (nNumber + 1)**2
        }
    }
    return -1
}
*/