function solution(arr) {
    arr.forEach((e, i) => {
        if (e >= 50 && e % 2 === 0) {
           arr[i] = e / 2 
        } else if (e <= 50 && e % 2 !== 0) {
            arr[i] = e * 2;
        }
    })
    
    return arr
}