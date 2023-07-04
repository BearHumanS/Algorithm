function solution(money) {
    const a = parseInt(money / 5500) // Math.floor
    const b = money - (a * 5500)
    return [a, b];
}


/*function solution(money) {
    const a = Math.floor(money / 5500)
    const b = money % 5500
    return [a, b];
}*/

