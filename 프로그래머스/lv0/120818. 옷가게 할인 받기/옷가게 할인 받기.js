/*
function solution(price) {
    let DC = 0
    if (price >= 500000) {
        DC = 0.2
    } else if (price >= 300000) {
        DC = 0.1
    } else if (price >= 100000) {
        DC = 0.05
    }
    const cal = price - price * DC
    return Math.floor(cal)
}
*/

function solution(price) {
    if (price >= 500000) {
        return parseInt(price * 0.8)
    } else if (price >= 300000) {
        return parseInt(price * 0.9) 
    } else if (price >= 100000) {
        return parseInt(price * 0.95)
    }
    return price
}

