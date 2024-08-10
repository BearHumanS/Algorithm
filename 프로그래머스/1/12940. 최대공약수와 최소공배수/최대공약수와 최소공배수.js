function solution(n, m) {
   const min = Math.min(n, m)
   const max = Math.max(n, m)
   
   let arr = []
   
   for (let i = 1; i <= min; i++) {
       if (min % i === 0 && max % i === 0) {
           arr.push(i)
       }
   }
    
    return [arr[arr.length - 1], (min * max) / arr[arr.length - 1]]
}

/*
function gcd(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
} << 유클리드 호제법으로 최대 공약수

function lcm(a, b){
    return (a * b) / gcd(a,b);
} << 최대 공배수

function solution(n, m) {
    let answer = [];
    answer = [gcd(n,m), lcm(n,m)];

    return answer;
}

*/