function solution(a, b) {
    let sum = a + b
    if (a === b) {
        sum = a
        return a
    }
    let middleNumber = []
    for (let i = a + 1; i < b; i++) {
        middleNumber.push(i)
    }
    if (a > b) {
           for (let i = b +1; i < a; i++) {
               middleNumber.push(i)
           }
        }
    const addMidleNumber = middleNumber.reduce((a, b) => a + b, 0)
    
    return sum + addMidleNumber
}

