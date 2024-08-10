function solution(left, right) {
    let arr = []

    for (let i = left; i <= right; i++) {
        let divisors = []
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors.push(j)
            }
        } 
        arr.push(divisors)
    }
    
    
    
    
    return arr.map((e) => e.length % 2 === 0 ? e[e.length - 1] : -e[e.length - 1]).reduce((acc, cur) => acc + cur, 0)
}