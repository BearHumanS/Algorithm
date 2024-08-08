function solution(numbers, n) {
    const sum = numbers.reduce((acc, cur) => {
        if (acc > n) {
            return acc
        } else {
            return acc + cur
        }
    })
    
    return sum
}