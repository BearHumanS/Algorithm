/*
function solution(n, t) {
    for (let i = 0; i < t; i ++) {
        n *=2
    }
    
    return n
}
*/

const solution = (n, t) => {
    
    if ( t === 0) {
        return n
    }
    
    return solution(n * 2, t - 1)
}