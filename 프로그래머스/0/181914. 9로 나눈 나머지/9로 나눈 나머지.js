function solution(number) {
    const sum = [...number].reduce((a, b) => a + +b, 0)
    
    return sum % 9
}