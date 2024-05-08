function solution(cipher, code) {
    let a = [...cipher]
    
    let b = []
    
    for (let i = code - 1; i < a.length; i+=code) {
        if ((i + 1) % code === 0) {
            b.push(a[i])
        }
    }
    return b.join('')
}