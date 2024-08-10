function solution(n, m) {
   const min = Math.min(n, m)
   const max = Math.max(n, m)
   
   let arr = []
   
   for (let i = 1; i <= min; i++) {
       if (min % i === 0 && max % i === 0) {
           arr.push(i)
       }
   }
    
    return [arr[arr.length - 1], (min * max) / arr[arr.length - 1]]
}