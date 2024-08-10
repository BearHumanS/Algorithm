function solution(s) {
    const regex = /^[0-9]+$/
    return (s.length ===4 || s.length ===6) && regex.test(s)
}



/*
문자열의 s의 길이가 4혹은 6이고, 숫자로만 구성되어있는지 확인해주는 함수를 완성하라

ex s가 "a234"이면 flase, "1234"면 true
*/