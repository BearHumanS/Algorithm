function solution(n) {
    let I = 1;
    let Array = []
    for (let i = 1; I <= n; i++) {
        I *= i;
        if (I > n) {
            break;
        }
        Array.push(I);
    }
    return Array.length;
}


/*function solution(n) {
    let I = 1;
    let Array = []
    for (let i = 1; I <= n; i++) {
       Array.push(I *= i)
    }
    const result = Array.splice(-1)
    return Array.length*/
