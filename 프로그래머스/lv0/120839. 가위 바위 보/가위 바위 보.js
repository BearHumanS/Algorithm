function solution(rsp) {
    const r = 0;
    const s = 2;
    const p = 5;
    const rspArr = [...rsp];
    let newArr = [];
    for (let i = 0; i <= rspArr.length; i++) {
        if (rspArr[i] === "0") {
            newArr.push(5)
        } else if (rspArr[i] === "2") {
            newArr.push(0)
        } else if (rspArr[i] === "5") {
            newArr.push(2)
        }
    }
    return newArr.join('')
}