function solution(d, budget) {
    const sorted = d.sort((a, b) => a - b)
    let count = 0
    let sum = 0
    
    for (let i = 0; i < d.length; i++) {
        sum += sorted[i]
        
        if (sum > budget) {
            break
        }
        count ++
    }
    
    return count;
}