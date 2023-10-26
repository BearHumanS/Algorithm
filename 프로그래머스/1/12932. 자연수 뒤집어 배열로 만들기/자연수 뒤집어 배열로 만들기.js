function solution(n) {
    const array = [...String(n)]
    const result = array.map(arr => Number(arr))
    return result.reverse()
}