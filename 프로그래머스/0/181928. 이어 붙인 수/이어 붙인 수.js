function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    num_list.map(e => {
        if (e % 2 !== 0) {
            evenSum+= String(e)
        } else oddSum+= String(e)
    })
    
    return Number(oddSum) + Number(evenSum)
}