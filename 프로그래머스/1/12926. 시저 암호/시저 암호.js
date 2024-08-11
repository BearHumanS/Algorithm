function solution(s, n) {
    return s.split('').map(e => {
        if (e >= "a" && e <= "z") {
            return String.fromCharCode((e.charCodeAt(0) - 97 + n) % 26 + 97)
        } else if (e >= "A" && e <="Z") {
            return String.fromCharCode((e.charCodeAt(0) - 65 + n) % 26 + 65)
        } else {
            return e
        }
    }).join('')
}

/*
문자열 s와 거리 n

아스키 코드 사용?
*/