function solution(n) {
    let odd = []
    let even = []
    
    for (let i = 1; i <= n; i++) {
        if (n % 2 === 0) {
           if (i % 2 === 0) {
               even.push(i)
           } 
        } else if (n % 2 !== 0) {
             if (i % 2 !== 0) {
               odd.push(i)
           } 
        }
    } 
    
    
    const oddSum = odd.reduce((a, b) => a + b, 0)
    const evenSquare = even.map(e => e**2)
    const evenSquareSum = evenSquare.reduce((a, b) => a + b, 0)

    return n % 2 === 0 ? evenSquareSum : oddSum
}