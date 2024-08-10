function solution(s) {
    return s.split(' ').map((item) => (
     [...item].map((e, i) => i % 2 !== 0 ? e.toLowerCase() : e.toUpperCase())).join('')).join(' ')
}

/*
문자열 s는 한 개 이상의 단어로 구성

각 단어는 하나 이상의 공백문자로 구분

각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로
*/