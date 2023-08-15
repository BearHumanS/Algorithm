function solution(my_string) {
    const regex = /[^0-9]/g;
    const number = my_string.replace(regex, "").split('')
    const result = number.map(Number)
    return result.reduce((a, b) => a + b)
}