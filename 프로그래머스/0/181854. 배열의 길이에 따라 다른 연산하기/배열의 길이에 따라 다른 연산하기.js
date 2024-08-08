function solution(arr, n) {
   //const oddArr = arr.length % 2 !== 0 && arr.map((e, i) => i % 2 === 0 ? e + n : e)
   //const evenArr = arr.length % 2 === 0 && arr.map((e, i) => i % 2 !== 0 ? e + n : e)
   
   //return arr.length  % 2 === 0 ? evenArr : oddArr
   
   return arr.map((e, i) => 
       arr.length % 2 !== i % 2 ? e + n : e
   )
}