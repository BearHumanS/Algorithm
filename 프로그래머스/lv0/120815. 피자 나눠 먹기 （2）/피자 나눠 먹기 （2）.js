/* 수학적 풀이, 재귀 함수 이용해서 유클리드 호제법을 이용해서 최소공배수 구하여서 계산
function solution(n) {
    let pizza = 6; 

    let gcdValue = gcd(pizza, n);
    let box = (pizza * n) / gcdValue;

    return box / 6;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
*/


/*
function solution(n) {
    let pizza = 6;
    for (let i = 1; i <= n; i++) {
        if (pizza % n === 0) {
            return pizza / 6;
        }
        pizza += 6;
    }
    return pizza
}*/


function solution(n) {
    let pizza = 1;

    while (pizza * 6 % n !== 0) {
        pizza += 1;
    }

    return pizza;
}