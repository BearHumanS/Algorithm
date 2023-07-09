function solution(balls, share) {
    let n = 1
    for (let i = 1; i <= balls; i++) {
        n = n * i
    }
    
    let m = 1
    for (let i = 1; i <= share; i++) {
        m = m * i
    }
    let x = 1
    for (let i = 1; i <= balls - share; i++) {
        x = x * i
    }
    return Math.round(n / (m * x))
}