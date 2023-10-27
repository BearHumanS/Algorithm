function solution(n) {
    const arr = Array.from([...String(n)], Number)
    const sortable = arr.sort((a, b) => b - a)
    return Number(sortable.join(''))
}