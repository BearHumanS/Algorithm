function solution(t, p) {
    const arr = [...t]
    let answer = []
    
    for (let i = 0; i <= arr.length - [...p].length; i++) {
        let temp = ''
        for (let j = 0; j < [...p].length; j++) {
            temp += t[i + j];
        }
        answer.push(temp)
    }
    
    const result = answer.map(e => e <= p).filter(x => x === true).length
    
    return result
}

