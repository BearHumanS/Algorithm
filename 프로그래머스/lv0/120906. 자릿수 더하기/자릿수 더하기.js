function solution(n) {
    const nts = String(n)
    const newArray = [...nts]
    
    let result = 0
    
    for(let i = 0; i < newArray.length; i++) {
        result += Number(newArray[i])
    }
    return result
}