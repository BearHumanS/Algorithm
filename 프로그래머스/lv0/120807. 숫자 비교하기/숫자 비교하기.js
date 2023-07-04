// 기존 문제 풀이 
// 문제점1. answer 변수를 선언하지 않고 바로 사용, 이러면 answer가 window 객체의 포로퍼티로 붙어서 부정적인 부분이 많음.
// 문제점2. 동등연사자(==) 사용, 동등연산자 대신에 일치연산자(===) 사용 요망

function solution(num1, num2) {
    if (num1 == num2) {
        answer = 1
    } else {
        answer = -1
    }
    return answer;
} 

// 개선한 문제 풀이

function solution(num1, num2) {
    let answer;
    if (num1 === num2) {
        answer = 1
    } else {
        answer = -1
    }
    return answer;
}

// 다른 문제 풀이
// else를 생략하고 얼리 리턴

function solution(num1, num2) {
    if (num1 === num2) {
        return 1
    } 
    return -1;
}

// 다른 문제 풀이 
// 삼항 연산자 사용
    function solution(num1, num2) {
        return num1 === num2 ? 1 : -1
}