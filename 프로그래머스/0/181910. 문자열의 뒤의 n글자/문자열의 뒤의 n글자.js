function solution(my_string, n) {
    const reverse = [...my_string].reverse().join('')
    return [...reverse.substring(0, n)].reverse().join('')
}