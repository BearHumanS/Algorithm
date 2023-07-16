function solution(numbers, direction) {
   const A = []
   let B = []
   for (let i = 0; i < numbers.length; i++) {
      if (direction === 'right') {
          A.push(numbers.splice(-1))
           B.push(numbers.splice(i))
      } else if (direction === 'left') {
          A.push(numbers.splice(1))
            B.push(numbers.splice(i))
      }
   }
    return A.concat(B).flat()
}