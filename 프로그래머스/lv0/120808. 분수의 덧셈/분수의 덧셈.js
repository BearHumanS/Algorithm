function solution(numer1, denom1, numer2, denom2) {
    // num1 = 분자
    let num1 = numer1 * denom2 + numer2 * denom1;
    // num2 = 분모
    let num2 = denom1 * denom2;
    
    // GCF 최대공약수 약어
    let GCF = 1

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            GCF = i;
        }
    }

    const a = num1 / GCF;
    const b = num2 / GCF;

    return [a, b];
}