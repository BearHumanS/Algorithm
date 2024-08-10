function solution(numbers) {
    let arr = []
    
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, cur) => acc + cur, 0)
}