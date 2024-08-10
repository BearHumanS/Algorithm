function solution(arr) {
   let result = []
   
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] !== arr[i + 1]) {
           result.push(arr[i])
       }
   }
    
    return result
}

/*
배열 arr의 각 원소는 숫자 0 ~ 9
arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
*/