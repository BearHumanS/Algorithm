function solution(emergency) {
const emergArr = emergency.slice().sort((a, b) => b - a);


const result = emergency.map(element => emergArr.indexOf(element) + 1);
    return result
}


// 이중for문으로 풀어보기