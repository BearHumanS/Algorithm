function solution(cipher, code) {
    let a = [...cipher]
    
    let b = []
    
    for (let i = 0; i < a.length; i++) {
        if ((i + 1) % code === 0) {
            b.push(a[i])
        }
    }
    return b.join('')
}