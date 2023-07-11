function solution(numbers, k) {
    let result = ''
   for (let i = 0; i < k; i++) {
       result = numbers[(i * 2) % numbers.length]
   } 
    return result
}

/*
function solution(numbers, k) {
  let ball = 1;
  for (let i = 0; i < k - 1; i++) {
    ball += 2;
    if (ball > numbers.length) {
      ball -= numbers.length;
    }
  }
  return ball;
}
*/