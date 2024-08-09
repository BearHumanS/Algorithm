function solution(myString, pat) {
    const changeChar = [...myString].map(item => item === "A" ? item = "B" : 'A').join('')
    
    return changeChar.includes(pat) ? 1 : 0
}