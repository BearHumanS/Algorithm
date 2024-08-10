function solution(arr1, arr2) {
   let arr = []
   
   for (let i = 0; i < arr1.length; i++) {
       let row = []
       for (let j =  0; j < arr1[i].length; j++) {
           row.push(arr1[i][j] + arr2[i][j])
       }
       arr.push(row)
   }
    return arr
}

/*
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과

행렬 덧셈의 결과를 반환하는 함수
*/