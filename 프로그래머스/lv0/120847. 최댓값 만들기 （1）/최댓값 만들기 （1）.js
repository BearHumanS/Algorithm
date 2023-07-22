function solution(numbers) {
    let A = []
    A.push(numbers.sort((a,b) => a - b).splice(-1))
    
    let B = []
    B.push(numbers.sort((a,b) => a - b).splice(-1))
    
    return A[0] * B[0]
}