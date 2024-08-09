function solution(arr, divisor) {
    let answer = [];
    
    arr.map(item => item % divisor === 0 && answer.push(item))
    
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1]
}