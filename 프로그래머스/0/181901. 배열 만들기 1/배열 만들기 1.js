function solution(n, k) {
    let ret = []
    
    for (let i = k; i <= n; i+=k) {
        ret.push(i)
    }
    return ret
}