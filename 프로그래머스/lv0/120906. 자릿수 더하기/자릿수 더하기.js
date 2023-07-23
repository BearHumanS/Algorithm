function solution(n) {
    const nts = n.toString()
    const newArray = nts.split('')
    return newArray.reduce((a, b) => Number(a) + Number(b), 0)    
}

/*
function solution(n) {
    const nts = String(n)
    const newArray = [...nts]
    
    let result = 0
    
    for(let i = 0; i < newArray.length; i++) {
        result += Number(newArray[i])
    }
    return result
}
*/