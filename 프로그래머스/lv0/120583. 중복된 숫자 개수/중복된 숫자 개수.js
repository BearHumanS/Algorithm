function solution(array, n) {
    let result = []
    let find = array.indexOf(n)
    for (let i = 0; i < array.length; i++) {
        if (find !== -1) {
            result.push(find)
            find = array.indexOf(n, find +1)
        }
    }
    return result.length
}