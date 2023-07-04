function solution(numbers) {
   let sum = 0
   for(let i = 0;  i < numbers.length; i++) {
       sum += numbers[i]
   }
    const avg = sum / numbers.length
    return avg
} 

/*
function solution(numbers) {
    // const IV = 0 라는 초기 값을 할당하면 acc + cur, IV 이런 식으로 써도 가능.
    const sum = numbers.reduce((acc, cur) => 
                              acc + cur, 0)
    const avg = sum / numbers.length
    return avg
}
*/
    




