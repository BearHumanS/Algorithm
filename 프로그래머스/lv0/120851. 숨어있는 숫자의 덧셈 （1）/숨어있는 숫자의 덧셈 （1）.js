// +a, +b를 한 이유
// +는 단항 더하기 연산자이다.
// 피연산자 앞에 위치하며 피연산자를 평가하지만, 
// 만약 피연산자가 숫자가 아니라면 숫자로 변환을 시도한다.
// 단항 더하기 연산자 대신에 Number함수를 사용해도 된다.
function solution(my_string) {
    return [...my_string].reduce((a, b) => Number(b) ? +a + +b : a,0)
}

/*
function solution(my_string) {
    const regex = /[^0-9]/g;
    const number = my_string.replace(regex, "").split('')
    const result = number.map(Number)
    return result.reduce((a, b) => a + b)
}
*/