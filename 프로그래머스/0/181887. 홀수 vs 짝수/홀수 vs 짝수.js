function solution(num_list) {
    let oddArr = []
    let evenArr = []
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            evenArr.push(num_list[i])
        } else oddArr.push(num_list[i])
    }
    
    const oddSum = oddArr.reduce((acc, cur) => acc + cur, 0)
    const evenSum = evenArr.reduce((acc, cur) => acc + cur, 0)
    
    return Math.max(oddSum, evenSum)
}