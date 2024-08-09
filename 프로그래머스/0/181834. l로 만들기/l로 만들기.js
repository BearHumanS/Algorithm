function solution(myString) {
    
    return [...myString].map(item => item < "l" ? item = "l" : item).join('')
}