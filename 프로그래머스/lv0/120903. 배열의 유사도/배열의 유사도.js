function solution(s1, s2) {
    let dup = []
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                dup.push(i)
            }
        }
    }
    return dup.length
}