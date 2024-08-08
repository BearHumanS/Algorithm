function solution(my_string, n) {
    let ret = []
    
    for (let i = 0; i < n; i++) {
        ret.push([...my_string][i])
    }
    
    return ret.join('')
}