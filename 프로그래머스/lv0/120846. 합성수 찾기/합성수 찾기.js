function solution(n) {
   let result = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        result.push(j)
          break
      }
    }
  }
  return result.length
}