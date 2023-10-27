function solution(s){
    const arr = [...String(s)]
    let pNumber = [];
    let yNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "p" || arr[i] === "P") {
            pNumber.push(i)
        } else if (arr[i] === "y" || arr[i] === "Y") {
            yNumber.push(i)
        }
    }
    return pNumber.length === yNumber.length ? true : false
}