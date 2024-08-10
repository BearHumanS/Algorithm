function solution(absolutes, signs) {
    const chage = absolutes.map((e, i) => {
        if (signs[i] === true) {
            return e
        } else {
            return -e
        }
    })
    
    return chage.reduce((acc, cur) => acc + cur, 0)
}