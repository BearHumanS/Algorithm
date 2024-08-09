function solution(myString) {
    return [...myString].map(item => item === "a" ? item = "A" : item ==="A" ? item : item.toLowerCase()).join('')
}