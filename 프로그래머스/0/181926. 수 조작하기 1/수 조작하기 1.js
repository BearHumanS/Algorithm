function solution(n, control) {
    const object = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    }
    
    let result = 0;
    
    for (let char of control) {
        result+= object[char]
    }
    
    return n + result
}