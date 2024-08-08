function solution(num_list) {
    const sum = num_list.reduce((a, b) => (a + b), 0)
    const square = sum * sum
    const multiply = num_list.reduce((a, b) => a * b, 1)
    
   return square > multiply ? 1: 0
}